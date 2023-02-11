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

interface Props extends Omit<IPost, 'id'> {
  number: number
  isPrime: boolean
}

export const Post: FC<Props> = ({
  title,
  description,
  img,
  number,
  isPrime,
}) => {
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
        <Button size='small'>Remove</Button>
      </CardActions>
    </Card>
  )
}
