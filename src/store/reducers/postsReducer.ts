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
  keyword: '',
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
        keyword: state.keyword,
        originalList: action.payload,
        list: action.payload,
      }
    case PostsActionTypes.POSTS_FETCH_ERROR ||
      PostsActionTypes.POSTS_FILTER_ERROR:
      return {
        originalList: [],
        list: [],
        loading: false,
        error: action.payload,
        keyword: state.keyword,
      }
    case PostsActionTypes.POSTS_FILTER_SUCCESS:
      return {
        originalList: state.originalList,
        list: action.payload,
        loading: false,
        error: null,
        keyword: state.keyword,
      }
    case PostsActionTypes.POSTS_FILTER_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      }
    default:
      return state
  }
}
