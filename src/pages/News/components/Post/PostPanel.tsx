import s from './post.module.css'

import { FC } from 'react'
import { Button, Container } from '@mui/material'

interface Props {
  onAdd: () => void
}

export const PostPanel: FC<Props> = ({ onAdd }) => {
  return (
    <div className={s.panel}>
      <Container>
        <Button variant='outlined' onClick={onAdd}>
          Add post
        </Button>
      </Container>
    </div>
  )
}
