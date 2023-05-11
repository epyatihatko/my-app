import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'

import icon from 'src/assets/icons/icon.svg'

const pages = ['Home', 'Treat me now', 'Schedule visit', 'Messages']

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<Element | null>()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position='static'
      sx={{
        background: { xs: 'transparent', md: 'default' },
        boxShadow: {
          xs: 'none',
          md: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
        }
      }}
      color='default'
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: { xs: 'space-between' } }}>
          <KeyboardBackspaceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <ChevronLeftOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '25px',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            ZEALTHY
          </Typography>

          <Typography
            variant='h5'
            noWrap
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '25px',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            ZEALTHY
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              mr: 1
            }}
          >
            {pages.map((page: string) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block', fontWeight: 'bold' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Avatar alt='Remy Sharp' src={icon} />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page: string) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' color='inherit'>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
