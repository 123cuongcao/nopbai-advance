import react as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MediaCard from './renderProducts';
// import productList from "../components/products.json";


export default function ButtonAppBar() {

    // console.log(productList);

  return (
    <>
    
    {/* <Box sx={{ flexGrow: 1 ,}}>
      <AppBar  sx={{background:'#d71a47'}} position="static">
        <Toolbar sx={{display:'flex',justifyContent:'center'}}>
          <Typography   variant="h6" component="div"  >
           <span>To Spend </span> <span> </span> <span>You have money</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>  */}



    {/* <div style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", padding: "70px",}}>   
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
   
    </div> */}



</>
  );
}