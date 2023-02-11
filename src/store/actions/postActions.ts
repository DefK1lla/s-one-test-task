import type { Dispatch } from 'redux'
import {
  PostsAction,
  PostsActionTypes,
  Post,
} from '../../shared/types/post'

import postApi from '../../shared/api/post'

const getPosts = () => async (dispatch: Dispatch<PostsAction>) => {
  try {
    dispatch({ type: PostsActionTypes.POSTS_FETCH })
    const res = await postApi.getAll()
    dispatch({
      type: PostsActionTypes.POSTS_FETCH_SUCCESS,
      payload: res,
    })
  } catch (e) {
    const err = e as Error
    dispatch({
      type: PostsActionTypes.POSTS_FETCH_ERROR,
      payload: err.message,
    })
  }
}

const deleteOneById =
  (id: number) => async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: PostsActionTypes.POSTS_FETCH })
      await postApi.deleteOneById(id)
      getPosts()
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
}
