import type { LoginData } from '../types/user'

import mockLogin from '../utils/mockLogin'

class UserApi {
  login = async (userData: LoginData) => {
    const res = await mockLogin(userData)

    return {
      token: res.token,
    }
  }
}

export default new UserApi()
