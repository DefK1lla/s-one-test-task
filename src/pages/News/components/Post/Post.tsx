import { FC, memo } from 'react'

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
  onRemove: (id: number) => void
}

export const Post: FC<Props> = ({
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={img} />
      <CardHeader
        title={number.toString() + '. ' + title}
        subheader={isPrime ? 'Prime' : 'Not Prime'}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleRemove} size='small'>
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}
