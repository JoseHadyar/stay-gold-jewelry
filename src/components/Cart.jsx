import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const Cart = ({ data }) => {
    const ctx = useContext(CartContext);



    return (
        <>
            <h1 className="cartTitle">TU CARRITO</h1>
            <div>
                {
                    (ctx.cartList.length > 0)
                        ? <Button variant="contained" color="error" className="delete" onClick={ctx.clear}>Delete all</Button>
                        : <span>Carrito vacio</span>
                }
            </div>
            {
                ctx.cartList.map(item =>
                    <>
                        {/* <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={10} columnSpacing={{ xs: 10, sm: 2, md: 3 }}>
                                <Grid item xs={10}>
                                    <Item className="ItemGrid">
                                        <div>{item.qty}</div>
                                        <div>{item.title}</div>
                                        <div>${item.precio}</div>
                                        <div>${item.qty * item.precio}</div>
                                        <Button variant="outlined" color="error" className="remove" onClick={() => ctx.removeItem(item.id)}>Delete this product</Button>
                                    </Item>
                                    
                                </Grid>
                            </Grid>
                        </Box> */}

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={5}>
                                <Grid item xs={3}>
                                    <Item>{item.qty} items</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>{item.title}</Item>
                                </Grid>
                                <Grid item xs={2}>
                                    <Item>${item.precio} c/u</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Total: ${item.qty * item.precio}</Item>
                                    <Button variant="outlined" color="error" className="remove" onClick={() => ctx.removeItem(item.id)}>Delete this product</Button>
                                </Grid>

                            </Grid>
                        </Box>



                    </>
                )
            }

            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Summary Order" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Total:" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
            </Box>

        </>
    );

}

export default Cart;