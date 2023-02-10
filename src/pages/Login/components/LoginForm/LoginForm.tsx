import s from './loginForm.module.css'

import { FC, useState } from 'react'

import { TextField, Stack, Button, Paper } from '@mui/material'

export const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Paper className={s.wrapper}>
      <Stack spacing={2}>
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

        <Button>Sign in</Button>
      </Stack>
    </Paper>
  )
}
