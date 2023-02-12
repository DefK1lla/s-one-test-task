import s from './layout.module.css'

import { FC, PropsWithChildren } from 'react'

import { navItems } from '../../shared/content/nav'

import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header navItems={navItems} />
      <main className='main'>{children}</main>
      <Footer navItems={navItems} />
    </div>
  )
}
