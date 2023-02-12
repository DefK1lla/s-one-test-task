import s from './post.module.css'

import { ChangeEventHandler, FC, useCallback, useEffect } from 'react'
import { Button, Container, TextField, Stack } from '@mui/material'
import { useActions, useAppSelector } from 'shared/hooks/store'
import useDebounce from 'shared/hooks/useDebounce'
import post from 'shared/api/post'

interface Props {
  onAdd: () => void
}

export const PostPanel: FC<Props> = ({ onAdd }) => {
  const keyword = useAppSelector(state => state.posts.keyword)
  const { postActions } = useActions()
  const debouncedKeyword = useDebounce<string>(keyword, 500)

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    postActions.setKeyword(e.target.value)
  }

  useEffect(() => {
    postActions.filterPosts()
  }, [debouncedKeyword])

  return (
    <div className={s.panel}>
      <Container>
        <Stack alignItems='start' spacing={2}>
          <Button variant='outlined' onClick={onAdd}>
            Add post
          </Button>
          <TextField
            placeholder='Search'
            value={keyword}
            onChange={onChange}
            variant='standard'
            fullWidth
          />
        </Stack>
      </Container>
    </div>
  )
}
