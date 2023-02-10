import {
  UserAction,
  UserActionTypes,
  UserState,
} from '../../shared/types/user'

const initialState: UserState = {
  isAuth: false,
  loading: false,
  token: null,
  error: null,
}

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return { ...state, loading: true }
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        isAuth: true,
        loading: false,
        error: null,
        token: action.payload,
      }
    case UserActionTypes.USER_LOGIN_ERROR:
      return {
        loading: false,
        isAuth: false,
        token: null,
        error: action.payload,
      }
    default:
      return state
  }
}
