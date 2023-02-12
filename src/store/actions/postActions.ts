import type { Dispatch, Store } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import {
  PostsAction,
  PostsActionTypes,
} from '../../shared/types/post'

import postApi from '../../shared/api/post'

import { RootState } from 'store'

const getPosts =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, void, PostsAction>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: PostsActionTypes.POSTS_FETCH })
      const res = await postApi.getAll()
      dispatch({
        type: PostsActionTypes.POSTS_FETCH_SUCCESS,
        payload: res,
      })

      if (getState().posts.keyword) {
        dispatch(filterPosts())
      }
    } catch (e) {
      const err = e as Error
      dispatch({
        type: PostsActionTypes.POSTS_FETCH_ERROR,
        payload: err.message,
      })
    }
  }

const deleteOneById =
  (id: number) =>
  async (dispatch: ThunkDispatch<RootState, void, PostsAction>) => {
    try {
      dispatch({ type: PostsActionTypes.POSTS_FETCH })
      await postApi.deleteOneById(id)
      dispatch(getPosts())
    } catch (e) {
      const err = e as Error
      dispatch({
        type: PostsActionTypes.POSTS_FETCH_ERROR,
        payload: err.message,
      })
    }
  }

const filterPosts =
  () =>
  async (
    dispatch: Dispatch<PostsAction>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: PostsActionTypes.POSTS_FILTER })
      const { originalList, keyword } = getState().posts
      dispatch({
        type: PostsActionTypes.POSTS_FILTER_SUCCESS,
        payload: originalList.filter(
          post =>
            post.title.includes(keyword) ||
            post.description.includes(keyword)
        ),
      })
    } catch (e) {
      const err = e as Error
      dispatch({
        type: PostsActionTypes.POSTS_FILTER_ERROR,
        payload: err.message,
      })
    }
  }

const setKeyword =
  (keyword: string) =>
  async (dispatch: ThunkDispatch<RootState, void, PostsAction>) => {
    try {
      dispatch({
        type: PostsActionTypes.POSTS_FILTER_KEYWORD,
        payload: keyword,
      })
    } catch (e) {
      const err = e as Error
      dispatch({
        type: PostsActionTypes.POSTS_FETCH_ERROR,
        payload: err.message,
      })
    }
  }

export default {
  getPosts,
  deleteOneById,
  filterPosts,
  setKeyword,
}
