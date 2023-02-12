import s from './modal.module.css'

import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useMemo,
  useState,
} from 'react'

import {
  Button,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { AddPostData, PostField } from 'shared/types/post'
import { Modal } from 'components/Modal'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: AddPostData) => void
}

export const AddPost: FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const reader = useMemo(() => new FileReader(), [])

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState<string>('')
  const [fileName, setFileName] = useState<string>('')
  const [fields, setFields] = useState<PostField[]>([])

  const clearState = () => {
    setTitle('')
    setDescription('')
    setImg('')
    setFileName('')
    setFields([])
  }

  const onFormSubmit: FormEventHandler = e => {
    e.preventDefault()
    onSubmit({
      title,
      description,
      img,
      fields,
    })
    onClose()
    clearState()
  }

  const onFileChange: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0]
    setFileName(file?.name ?? 'Upload file')
    reader.readAsDataURL(file as Blob)
    reader.onload = () => setImg(reader.result as string)
  }

  const addField = () => {
    setFields(prevState => {
      return [...prevState, { name: '', value: '' }]
    })
  }

  const removeField = (index: number) => () => {
    setFields(prevState =>
      prevState.filter((_, fieldIndex) => fieldIndex !== index)
    )
  }

  const changeField =
    (index: number, field: string) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const newFields = [...fields]
      newFields[index][field as keyof PostField] = e.target.value
      setFields(newFields)
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography gutterBottom variant='h4' component='h3'>
        Fill the fields
      </Typography>
      <form className={s.addPostForm} onSubmit={onFormSubmit}>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          label='Title'
          size='small'
          fullWidth
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          label='Description'
          size='small'
          multiline
          fullWidth
          rows={4}
        />
        <Button variant='contained' component='label'>
          {fileName ? fileName : 'Upload File'}
          <input onChange={onFileChange} type='file' hidden />
        </Button>
        <Button onClick={addField}>Add field</Button>
        {fields.length > 0 &&
          fields.map((field, index) => (
            <div className={s.additionanalField} key={index}>
              <TextField
                value={fields[index].name}
                placeholder='Field name'
                variant='standard'
                onChange={changeField(index, 'name')}
              />
              <TextField
                value={fields[index].value}
                placeholder='Field value'
                variant='standard'
                onChange={changeField(index, 'value')}
              />

              <IconButton onClick={removeField(index)}>
                <CloseIcon />
              </IconButton>
            </div>
          ))}
        <Button type='submit' variant='outlined'>
          Submit
        </Button>
      </form>
    </Modal>
  )
}
