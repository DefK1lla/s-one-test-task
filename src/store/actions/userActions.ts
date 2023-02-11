import type { Dispatch } from 'redux'
import {
  UserAction,
  UserActionTypes,
  LoginData,
} from '../../shared/types/user'
import userApi from '../../shared/api/user'

export default {
  login:
    (userData: LoginData) =>
    async (dispatch: Dispatch<UserAction>) => {
      try {
        dispatch({ type: UserActionTypes.USER_LOGIN })
        const res = await userApi.login(userData)
        dispatch({
          type: UserActionTypes.USER_LOGIN_SUCCESS,
          payload: res.token,
        })
      } catch (e) {
        const err = e as Error
        dispatch({
          type: UserActionTypes.USER_LOGIN_ERROR,
          payload: err.message,
        })
      }
    },
}
