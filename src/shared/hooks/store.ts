import { useMemo } from 'react'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { AnyAction, bindActionCreators } from 'redux'

import type { AppDispatch, RootState } from '../../store'

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector

export const useActions = (actions: AnyAction) => {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [])
}
