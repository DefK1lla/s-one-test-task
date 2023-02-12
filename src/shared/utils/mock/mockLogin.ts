import type { LoginData } from '../../types/user'

const validData: LoginData = {
  username: 'admin',
  password: '12345',
}

export default async function mockLogin(userData: LoginData) {
  if (
    userData.username !== validData.username ||
    userData.password !== validData.password
  ) {
    throw new Error('Incorrect username or password')
  }

  const user = {
    id: Math.random().toString(16).slice(2),
    username: userData.username,
  }

  const token = btoa(JSON.stringify(user))

  return {
    id: user.id,
    username: userData.username,
    token,
  }
}
