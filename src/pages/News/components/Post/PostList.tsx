import { Container, Grid } from '@mui/material'

import { FC, memo, useCallback, useEffect } from 'react'

import { useActions, useAppSelector } from 'shared/hooks/store'
import { getFibonacciByIndex } from 'shared/utils/helpers/getFibonacciByIndex'
import { isPrime } from 'shared/utils/helpers/isPrime'

import { Post } from './Post'

export const PostList: FC = memo(() => {
  const { postActions } = useActions()
  const posts = useAppSelector(state => state.posts.list)
  const loading = useAppSelector(state => state.posts.loading)

  useEffect(() => {
    postActions.getPosts()
  }, [])

  const onRemove = useCallback(
    (id: number) => postActions.deleteOneById(id),
    []
  )

  return (
    <Container>
      <Grid
        container
        rowSpacing={2}
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
                onRemove={onRemove}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
})
