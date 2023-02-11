import { Middleware } from 'redux'

import { UserActionTypes } from '../../shared/types/user'

const userPersist: Middleware = store => next => action => {
  const result = next(action)
  if ((action.type = UserActionTypes.USER_LOGIN_SUCCESS)) {
    if (store.getState().user.isAuth) {
      const { isAuth, token } = store.getState().user
      localStorage.setItem('user', JSON.stringify({ isAuth, token }))
    }
  }
  return result
}

export default userPersist
