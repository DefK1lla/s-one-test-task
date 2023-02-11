import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './pages/Profile'
import { NotFount } from './pages/NotFound/NotFound'

import { navItems } from './shared/content/nav'

function App() {
  return (
    <BrowserRouter>
      <Header navItems={navItems} />
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
