import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MediaCard from './renderProducts'
import Box from '@mui/material/Box';
import productList from './products.json'


export default function ButtonAppBar() {
    console.log(productList);
  return (
    <div >
            
    <Box sx={{ flexGrow: 1 ,}}>
      <AppBar  sx={{background:'#d71a47'}} position="static">
        <Toolbar sx={{display:'flex',justifyContent:'center'}}>
          <Typography   variant="h6" component="div"  >
           <span>To Spend </span> <span> </span> <span>You have money</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>  


     <div style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", padding: "70px",}}> 
     {
        productList.map((item,index)=>(
            <MediaCard item={item}  key={item.id}/>
        ))
     }  
    </div> 
    <hr/>

     <div>
        <table>
            <thead>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Thành tiền</th>
                
            </thead>
            <tbody>
              <td ></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
        </table>
     </div>
    </div>
  )
}
