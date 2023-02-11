import { stat } from 'fs'
import {
  PostsAction,
  PostsActionTypes,
  PostsState,
} from '../../shared/types/post'

const initialState: PostsState = {
  loading: false,
  error: null,
  originalList: [],
  list: [],
}

export const postsReducer = (
  state = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.POSTS_FETCH ||
      PostsActionTypes.POSTS_FILTER:
      return { ...state, loading: true }
    case PostsActionTypes.POSTS_FETCH_SUCCESS:
      return {
        loading: false,
        error: null,
        originalList: action.payload,
        list: action.payload,
      }
    case PostsActionTypes.POSTS_FETCH_ERROR ||
      PostsActionTypes.POSTS_FILTER_ERROR:
      return {
        loading: false,
        error: action.payload,
        originalList: [],
        list: [],
      }
    case PostsActionTypes.POSTS_FILTER_SUCCESS:
      return {
        originalList: state.originalList,
        list: action.payload,
        loading: false,
        error: null,
      }
    default:
      return state
  }
}
