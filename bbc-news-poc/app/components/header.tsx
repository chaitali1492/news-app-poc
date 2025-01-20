import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="sticky" color='success'>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ mr:2 }}>
          News Website
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap:2}}>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/news" passHref>
          <Button color="inherit">News</Button>
        </Link>
        <Link href="/sport" passHref>
          <Button color="inherit">Sport</Button>
        </Link>
        <Link href="/business" passHref>
          <Button color="inherit">Business</Button>
        </Link>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Link href="/register" passHref>
            <Button color="inherit">Register</Button>
          </Link>
          <Link href="/login" passHref>
            <Button color="inherit">Login</Button>
          </Link>
        </Box>


      </Toolbar>
    </AppBar>
  );
};

export default Header;
