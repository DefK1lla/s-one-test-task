import s from './modal.module.css'

import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useMemo,
  useState,
} from 'react'

import { Button, TextField, Typography } from '@mui/material'

import { AddPostData } from 'shared/types/post'
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

  const onFormSubmit: FormEventHandler = e => {
    e.preventDefault()
    onSubmit({
      title,
      description,
      img,
    })
    onClose()
  }

  const onFileChange: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0]
    setFileName(file?.name ?? 'Upload file')
    reader.readAsDataURL(file as Blob)
    reader.onload = () => setImg(reader.result as string)
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
        <Button type='submit' variant='outlined'>
          Submit
        </Button>
      </form>
    </Modal>
  )
}
