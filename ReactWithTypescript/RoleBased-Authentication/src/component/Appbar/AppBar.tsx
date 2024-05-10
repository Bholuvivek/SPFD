import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SecurityIcon from '@mui/icons-material/Security';


const pages = [
  {name:'Products',
    link:'/Products'
  },
  {name:'Pricing',
    link:'Pricing',
  }
  ,{name:'Blog',
  link:'/Blog'
}
   ];
const settings =[ 
  {
  name:'Profile',
  link:'/www.github.com/Bholuvivek'
},
{
  name:'Account',
  link:'www.github.com'
},
{
  name:'YouTube',
  link:'www.youtube.com'
},
{
  name:'Dashboard',
  link:'www.scaler.com'
},
{
  name:'LogOut',
  link:'www.google.com'
}
     ];

function NavBar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setLogin] = React.useState<boolean>(false)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
 
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
 const clickLogin =() =>{
  setLogin(!isLogin)
 }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{bgcolor:'#212121'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SecurityIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          Role
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SecurityIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              
              <Button
              key={page.name}
              onClick={handleCloseNavMenu}
            
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
           
                {page.name}
              
            </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {isLogin?(<Avatar alt="Login" src="https://avatars.githubusercontent.com/u/102277762?v=4" />):(<Avatar alt="Remy Sharp" src="https://cdn4.vectorstock.com/i/1000x1000/62/48/green-round-glossy-login-icon-vector-2976248.jpg" />)}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', width:'20rem' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >{isLogin?( settings.map((setting) => (
             
              <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                {setting.name}
              </MenuItem>
             
            ))):(<Button onClick={clickLogin} sx={{whiteSpace:'nowrap'}}>Please Login</Button>)}
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
