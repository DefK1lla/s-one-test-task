import { useMemo } from 'react'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { bindActionCreators } from 'redux'

import type { AppDispatch, RootState } from '../../store'

import userActions from 'store/actions/userActions'
import postActions from 'store/actions/postActions'

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector

export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(
    () => ({
      userActions: bindActionCreators(userActions, dispatch),
      postActions: bindActionCreators(postActions, dispatch),
    }),
    []
  )
}
