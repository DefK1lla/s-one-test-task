import s from './post.module.css'

import { FC } from 'react'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from '@mui/material'

import type { Post as IPost } from 'shared/types/post'

interface Props extends IPost {
  number: number
  isPrime: boolean
  access: boolean
  onRemove: (id: number) => void
}

export const Post: FC<Props> = ({
  access,
  title,
  description,
  img,
  number,
  isPrime,
  id,
  onRemove,
}) => {
  const handleRemove = () => {
    onRemove(id)
  }

  return (
    <Card className={s.post}>
      {img && <CardMedia className={s.postMedia} image={img} />}
      <CardHeader
        title={number.toString() + '. ' + title}
        subheader={isPrime ? 'Prime' : 'Not Prime'}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      {access && (
        <CardActions>
          <Button onClick={handleRemove} size='small'>
            Remove
          </Button>
        </CardActions>
      )}
    </Card>
  )
}
