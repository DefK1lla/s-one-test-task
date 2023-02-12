import s from './footer.module.css'

import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Link } from '@mui/material'

import { NavItem } from '../../shared/types/nav'
import { Stack } from '@mui/material'

interface Props {
  navItems: NavItem[]
}

export const Footer: FC<Props> = ({ navItems }) => {
  return (
    <div className={s.wrapper}>
      <Container>
        <Stack
          className={s.links}
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='center'
        >
          {navItems.map(item => (
            <Link key={item.title} component={NavLink} to={item.path}>
              {item.title}
            </Link>
          ))}
        </Stack>
      </Container>
    </div>
  )
}
