import s from './header.module.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  window?: () => Window
}

const navItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Profile',
    path: '/profile',
  },
  {
    title: 'News',
    path: '/news',
  },
  {
    title: 'Login',
    path: '/login',
  },
]

export default function DrawerAppBar(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box>
      <IconButton onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
      <Divider />
      <List onClick={handleDrawerToggle}>
        {navItems.map(item => (
          <ListItem
            component={Link}
            to={item.path}
            key={item.title}
            disablePadding
          >
            <ListItemButton className={s.navItemBtnBlack}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box className={s.wrapper}>
      <AppBar component='nav'>
        <Container>
          <Toolbar>
            <IconButton
              className={s.burgerBtn}
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={s.logoDesktop}
              variant='h6'
              component='div'
            >
              MUI
            </Typography>
            <Box className={s.navDesktop}>
              {navItems.map(item => (
                <Button
                  className={s.navItemBtnWhite}
                  component={Link}
                  to={item.path}
                  key={item.title}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          className={s.drawer}
          classes={{
            paper: s.drawerPaper,
          }}
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
