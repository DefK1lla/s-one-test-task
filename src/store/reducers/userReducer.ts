import {
  UserAction,
  UserActionTypes,
  UserState,
} from '../../shared/types/user'
import StorageWrapper from '../../shared/utils/storage'

const storage = new StorageWrapper('local')

const userFromStorage =
  storage.get<Omit<UserState, 'error' | 'loading'>>('user')

const initialState: UserState = {
  isAuth: userFromStorage?.isAuth || false,
  loading: false,
  token: userFromStorage?.token || null,
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
