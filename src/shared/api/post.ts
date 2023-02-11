import { Post } from '../types/post'
import { API_URL } from '../utils/config'

class PostApi {
  baseUrl = API_URL + '/news'
  getAll = async (): Promise<Post[]> => {
    const res = await fetch(this.baseUrl)
    const json = await res.json()

    if (!res.ok) {
      throw new Error('Something went wrong')
    }

    return json
  }

  deleteOneById = async (id: number): Promise<void> => {
    const res = await fetch(this.baseUrl + '/' + id, {
      method: 'DELETE',
    })
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
  }
}

export default new PostApi()
