import { FC } from 'react'

import { useActions, useAppSelector } from '../../shared/hooks/store'
import { LoginData } from '../../shared/types/user'
import userActions from '../../store/actions/userActions'
import LoginForm from './components/LoginForm'

export const Login: FC = () => {
  const { loading, error } = useAppSelector(state => state.user)
  const actions = useActions(userActions)

  const onSubmit = (data: LoginData) => actions.login(data)

  return (
    <>
      <LoginForm
        onSubmit={onSubmit}
        submitting={loading}
        error={error}
      />
    </>
  )
}
