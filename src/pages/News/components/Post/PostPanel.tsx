import s from './post.module.css'

import { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { Button, Container, TextField, Stack } from '@mui/material'

import { useActions, useAppSelector } from 'shared/hooks/store'
import useDebounce from 'shared/hooks/useDebounce'

interface Props {
  keyword: string
  onAddClick: () => void
  onKeywordChange: (keyword: string) => void
}

export const PostPanel: FC<Props> = ({
  keyword,
  onAddClick,
  onKeywordChange,
}) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    onKeywordChange(e.target.value)
  }

  return (
    <div className={s.panel}>
      <Container>
        <Stack alignItems='start' spacing={2}>
          <Button variant='outlined' onClick={onAddClick}>
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
