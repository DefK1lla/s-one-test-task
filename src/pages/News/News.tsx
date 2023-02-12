import { FC, useEffect, useState } from 'react'

import { useActions, useAppSelector } from 'shared/hooks/store'
import useDebounce from 'shared/hooks/useDebounce'
import { useModal } from 'shared/hooks/useModal'
import { AddPostData } from 'shared/types/post'

import { AddPost, PostList, PostPanel } from './components/Post'

export const News: FC = () => {
  const keyword = useAppSelector(state => state.posts.keyword)
  const isAuth = useAppSelector(state => state.user.isAuth)
  const { postActions } = useActions()
  const debouncedKeyword = useDebounce<string>(keyword, 500)

  const [isOpen, setIsOpen] = useModal()

  useEffect(() => {
    postActions.filterPosts()
  }, [debouncedKeyword])

  const onKeywordChange = (keyword: string) =>
    postActions.setKeyword(keyword)

  const onSubmit = (data: AddPostData) => {
    postActions.addPost(data)
  }

  return (
    <>
      {isAuth && (
        <PostPanel
          keyword={keyword}
          onKeywordChange={onKeywordChange}
          onAddClick={() => setIsOpen(true)}
        />
      )}
      <PostList access={isAuth} />
      <AddPost
        onSubmit={onSubmit}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
