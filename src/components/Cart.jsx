import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Cart = ({data}) => {
    const ctx = useContext(CartContext);

    return (
        <>
            <h1 className="cartTitle">TU CARRITO</h1>
            <Button variant="contained"  color="error" className="delete" onClick={ctx.clear}>Delete all</Button>
            {
                ctx.cartList.map(item =>
 
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={10} columnSpacing={{ xs: 10, sm: 2, md: 3 }}>
                                <Grid item xs={10}>
                                    <Item className="ItemGrid"> 
                                        <div>{item.qty}</div>
                                        <div>{item.title}</div>
                                        <div>{item.precio}</div>
                                        <Button variant="outlined" color="error" className="remove" onClick={() => ctx.removeItem(item.id)}>Delete this product</Button>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        
                )
            }
        </>
    );

}

export default Cart;