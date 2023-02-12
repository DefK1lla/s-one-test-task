import { FC, useCallback, useEffect } from 'react'
import { useActions, useAppSelector } from 'shared/hooks/store'

import { PostList, PostPanel } from './components/Post'

export const News: FC = () => {
  return (
    <>
      <PostPanel onAdd={() => console.log('clicked')} />
      <PostList />
    </>
  )
}
