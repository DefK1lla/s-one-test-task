import s from './loginForm.module.css'

import { FC, FormEventHandler, useState } from 'react'

import {
  TextField,
  Stack,
  Button,
  Paper,
  Typography,
} from '@mui/material'

import { LoginData } from '../../../../shared/types/user'

interface Props {
  submitting: boolean
  error: string | null
  onSubmit: (data: LoginData) => void
}

export const LoginForm: FC<Props> = ({
  submitting,
  error,
  onSubmit,
}) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onFormSubmit: FormEventHandler = e => {
    e.preventDefault()
    onSubmit({ username, password })
  }

  return (
    <Paper className={s.wrapper}>
      <Stack spacing={2} component='form' onSubmit={onFormSubmit}>
        {error && (
          <Typography className={s.error}> {error} </Typography>
        )}
        <TextField
          label='Username'
          variant='standard'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          label='Password'
          variant='standard'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button type='submit' disabled={submitting}>
          Sign in
        </Button>
      </Stack>
    </Paper>
  )
}
