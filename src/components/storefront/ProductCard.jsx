import React from "react";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { addToCart } from "../../store/cart";

function ProductCard(props){
  
  const dispatch = useDispatch();

  return(
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1602272312497-76be590ee2bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.inventory}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=> dispatch(addToCart(props.product))} size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard;