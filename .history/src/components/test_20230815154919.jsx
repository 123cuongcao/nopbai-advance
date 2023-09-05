import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import MediaCard from "./renderProducts";
import Box from "@mui/material/Box";
import productList from "./products.json";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ''

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

      <div>
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>asd</td>
              <td>ffff</td>
              <td style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center'}}> <span><AddIcon/></span><span>1</span><span><RemoveIcon/></span> </td>
              <td>gggg</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>ffff</td>
              <td>ffff</td>
              <td>gggg</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>ffff</td>
              <td>ffff</td>
              <td>gggg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
