import { FC } from 'react'
import withoutAuth from '../../hoc/withoutAuth'

import { useActions, useAppSelector } from '../../shared/hooks/store'
import { LoginData } from '../../shared/types/user'
import LoginForm from './components/LoginForm'

export const Login: FC = withoutAuth(() => {
  const { loading, error } = useAppSelector(state => state.user)
  const { userActions } = useActions()

  const onSubmit = (data: LoginData) => userActions.login(data)

  return (
    <>
      <LoginForm
        onSubmit={onSubmit}
        submitting={loading}
        error={error}
      />
    </>
  )
})
