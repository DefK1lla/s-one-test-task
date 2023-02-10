import type { Dispatch } from 'redux'
import {
  UserAction,
  UserActionTypes,
  UserData,
} from '../../../shared/types/user'

export const login =
  (userData: UserData) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.USER_LOGIN })
      // TODO add authorization in api
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.USER_LOGIN_SUCCESS,
          payload: 'anyToken',
        })
      }, 500)
    } catch (e) {
      const err = e as Error
      dispatch({
        type: UserActionTypes.USER_LOGIN_ERROR,
        payload: err.message,
      })
    }
  }
