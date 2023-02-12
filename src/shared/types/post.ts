export interface Post {
  id: number
  title: string
  description: string
  img: string
}

export interface PostsState {
  originalList: Post[]
  list: Post[]
  loading: boolean
  error: string | null
  keyword: string
}

export enum PostsActionTypes {
  POSTS_FETCH = 'POSTS_FETCH',
  POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS',
  POSTS_FETCH_ERROR = 'POSTS_FETCH_ERROR',
  POSTS_FILTER = 'POSTS_FILTER',
  POSTS_FILTER_SUCCESS = 'POSTS_FILTER_SUCCESS',
  POSTS_FILTER_ERROR = 'POSTS_FILTER_ERROR',
  POSTS_FILTER_KEYWORD = 'POSTS_FILTER_KEYWORD',
}

interface PostsFetchAction {
  type: PostsActionTypes.POSTS_FETCH
}

interface PostsFetchSuccessAction {
  type: PostsActionTypes.POSTS_FETCH_SUCCESS
  payload: Post[]
}

interface PostsFetchErrorAction {
  type: PostsActionTypes.POSTS_FETCH_ERROR
  payload: string
}

interface PostsFilterAction {
  type: PostsActionTypes.POSTS_FILTER
}

interface PostsFilterSuccessAction {
  type: PostsActionTypes.POSTS_FILTER_SUCCESS
  payload: Post[]
}

interface PostsFilterErrorAction {
  type: PostsActionTypes.POSTS_FILTER_ERROR
  payload: string
}

interface PostsFilterKeywordAction {
  type: PostsActionTypes.POSTS_FILTER_KEYWORD
  payload: string
}

export type PostsAction =
  | PostsFetchAction
  | PostsFetchSuccessAction
  | PostsFetchErrorAction
  | PostsFilterAction
  | PostsFilterSuccessAction
  | PostsFilterErrorAction
  | PostsFilterKeywordAction
