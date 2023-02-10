export interface UserState {
  isAuth: boolean
  loading: boolean
  token: string | null
  error: string | null
}

export enum UserActionTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
}

interface UserLoginAction {
  type: UserActionTypes.USER_LOGIN
}

interface UserLoginSuccessAction {
  type: UserActionTypes.USER_LOGIN_SUCCESS
  payload: UserState
}

interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR
  payload: string
}

export type UserAction =
  | UserLoginAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
