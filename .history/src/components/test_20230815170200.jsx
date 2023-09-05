import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MediaCard from "./renderProducts";
import Box from "@mui/material/Box";
import productList from "./products.json";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ButtonAppBar() {
  // const plus=()=>{

  // }
  const [cart, setCart] = useState([]);
  const [want, setWant] = useState([]);

  const buy = (item) => {
    setCart([...cart, item]);
  };
  const delete=(id)=>{
    const filter
  }

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
          <MediaCard
            want={want}
            setWant={setWant}
            item={item}
            key={item.id}
            buy={buy}
          />
        ))}
      </div>
      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Cart</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "550px",
            height: "500px",
            border: "1px solid #ccc",
            overflow: "scroll",
          }}
        >
          {/* *********render******* */}
          {cart.map((item, index) => (
            <div
              style={{
                width: "500px",
                background: "#e0e0e0",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontSize: "20px" }}>{item.title}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "20px",
                }}
              >
                <div>price:{item.price} </div>
                <div>Total: </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "15px",
                }}
              >
              
                <Stack direction="row" spacing={10}>
                    <DeleteIcon onClick={()=>delete(item.id)}/>
                  <Button variant="outlined">bớt</Button>
                  <div>1</div>
                  <Button variant="outlined" href="#outlined-buttons">
                    thêm
                  </Button>
                </Stack>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
