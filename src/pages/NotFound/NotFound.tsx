import { FC } from 'react'

import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const NotFount: FC = () => {
  const navigate = useNavigate()

  return (
    <Stack alignItems='center'>
      <Typography component='h1' variant='h2' textAlign='center'>
        404. Not found
      </Typography>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </Stack>
  )
}
