import s from './modal.module.css'

import { FC } from 'react'
import { Modal } from 'components/Modal'

import { Button, TextField, Typography } from '@mui/material'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const AddPost: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography gutterBottom variant='h4' component='h3'>
        Fill the fields
      </Typography>
      <form className={s.addPostForm}>
        <TextField label='Title' size='small' fullWidth />
        <TextField
          label='Description'
          size='small'
          multiline
          fullWidth
          rows={4}
        />
        <Button variant='outlined'>Submit</Button>
      </form>
    </Modal>
  )
}
