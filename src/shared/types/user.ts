export interface UserInfo {
  isAuth: boolean
  token: string | null
}

export interface UserState extends UserInfo {
  loading: boolean
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
  payload: string
}

interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR
  payload: string
}

export type UserAction =
  | UserLoginAction
  | UserLoginSuccessAction
  | UserLoginErrorAction

export interface LoginData {
  username: string
  password: string
}
