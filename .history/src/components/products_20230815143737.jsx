import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MediaCard from './renderProducts';

export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 ,background:'#d71a47'}}>
      <AppBar  position="static">
        <Toolbar >
          <Typography   variant="h6" component="div"  >
           <span>To Spend </span> <span> </span> <span>You have money</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <MediaCard/>
</>
  );
}