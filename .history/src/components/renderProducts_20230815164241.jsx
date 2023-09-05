import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard( {item , want, setWant} ) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.price}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'space-around'}}>
        <Button  sx={{border:'1px solid #d71a47',color:'#d71a47'}} size="small">LIKE</Button>
        <div>sdasda</div>
        <Button onClick={()=>} sx={{background:'#d71a47',color:'white'}} size="small" color='success'>Buy</Button>
      </CardActions>
    </Card>
  );
}