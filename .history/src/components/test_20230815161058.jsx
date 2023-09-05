import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import MediaCard from "./renderProducts";
import Box from "@mui/material/Box";
import productList from "./products.json";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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

      <div style={{ width: "500px", background: "" }}>
        <h1>Cart</h1>
        <div style={{fon}}>asdsadasd</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>price:</div>
          <div>Total:</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" ,marginTop:'15px'}}>
          <Stack direction="row" spacing={20}>
            <Button variant="outlined">bớt</Button>
                <div>1</div>
            <Button variant="outlined" href="#outlined-buttons">
             thêm
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
