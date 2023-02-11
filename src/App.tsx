import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './pages/Profile'
import { NotFount } from './pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/news' element={<News />} />
        <Route path='/' element={<News />} />
        <Route path='*' element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
