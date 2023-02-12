import { FC, useEffect, useState } from 'react'

import { useActions, useAppSelector } from 'shared/hooks/store'
import useDebounce from 'shared/hooks/useDebounce'
import { useModal } from 'shared/hooks/useModal'

import { AddPost, PostList, PostPanel } from './components/Post'

export const News: FC = () => {
  const keyword = useAppSelector(state => state.posts.keyword)
  const { postActions } = useActions()
  const debouncedKeyword = useDebounce<string>(keyword, 500)

  const [isOpen, setIsOpen] = useModal()

  useEffect(() => {
    postActions.filterPosts()
  }, [debouncedKeyword])

  const onKeywordChange = (keyword: string) =>
    postActions.setKeyword(keyword)

  return (
    <>
      <PostPanel
        keyword={keyword}
        onKeywordChange={onKeywordChange}
        onAddClick={() => setIsOpen(true)}
      />
      <PostList />
      <AddPost isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
