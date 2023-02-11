import { Button, Container, Grid } from '@mui/material'

import { FC } from 'react'

import type { Post as IPost } from 'shared/types/post'
import { getFibonacciByIndex } from 'shared/utils/helpers/getFibonacciByIndex'
import { isPrime } from 'shared/utils/helpers/isPrime'

import { Post } from './Post'

interface ListProps {
  posts: IPost[]
  onPostRemove: (id: number) => void
}

export const PostList: FC<ListProps> = ({ posts, onPostRemove }) => {
  return (
    <Container>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {posts.map((post, index) => {
          const number = getFibonacciByIndex(index + 1)
          const isNumberPrime = isPrime(number)

          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={post.id}>
              <Post
                title={post.title}
                description={post.description}
                img={post.img}
                number={number}
                isPrime={isNumberPrime}
                id={post.id}
                onRemove={onPostRemove}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
