import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import MediaCard from "./renderProducts";
import Box from "@mui/material/Box";
import productList from "./products.json";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function ButtonAppBar() {
  console.log(productList);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "#d71a47" }} position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" component="div">
              <span>To Spend </span> <span> </span> <span>You have money</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          padding: "70px",
        }}
      >
        {productList.map((item, index) => (
          <MediaCard item={item} key={item.id} />
        ))}
      </div>
      <hr />

      <div style={{width:'500px',background:''}} >
            <h1>Cart</h1>
            <div>asdsadasd</div>
            <div style={{display:'flex',justifyContent:'space-between'}} >
                <div>price:</div>
                <div>Total:</div>
            </div>
            <div style={{display:'flex'}}>
                <div><AddIcon/></div>
                <span>1</span>
                <span><RemoveIcon/></span>
            </div>
      </div>
    </div>
  );
}
