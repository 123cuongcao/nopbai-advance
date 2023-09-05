import React from 'react'

export default function ButtonAppBar() {
  return (
    <div>
            
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
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
   
    </div> 
    </div>
  )
}
