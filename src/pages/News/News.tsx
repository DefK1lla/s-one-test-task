import { FC, useEffect } from 'react'
import { useActions, useAppSelector } from 'shared/hooks/store'

import { PostList, PostPanel } from './components/Post'

export const News: FC = () => {
  const { postActions } = useActions()
  const { list: posts, loading } = useAppSelector(
    state => state.posts
  )

  useEffect(() => {
    postActions.getPosts()
  }, [])

  const onRemove = (id: number) => postActions.deleteOneById(id)

  return (
    <>
      <PostPanel onAdd={() => console.log('clicked')} />
      <PostList posts={posts} onPostRemove={onRemove} />
    </>
  )
}
