import { Container, Grid } from '@mui/material'

import { FC } from 'react'

import { Post } from './Post'

import type { Post as IPost } from '../../../../shared/types/post'

interface ListProps {
  posts: IPost[]
}

export const PostList: FC<ListProps> = ({ posts }) => {
  return (
    <Container>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {posts.map(post => {
          const number = 1
          const isPrime = true

          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={post.id}>
              <Post
                title={post.title}
                description={post.description}
                img={post.img}
                number={number}
                isPrime={isPrime}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
