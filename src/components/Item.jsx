import * as React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import { useEffect } from 'react';




const Item = (props) => {



    useEffect(()=> {
        
    }, []);

    return (
        <>
            {/* <div className="container">

                <Card className="cardContainer" sx={{ maxWidth: 245 }}>

                    <CardContent >
                        <img src={props.img} alt="" />
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Material: {props.material}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button className="cardButton" size="small">Detalle del Producto</button>
                        <button className="cardButton" size="small">Stock:</button>
                    </CardActions>
                </Card>
            </div> */}


            <div class="tarjeta__productos">
                
                    <img class="tarjeta__productos__imagen" src={props.img} alt=""/>
                
                <h3 class="tarjeta__productos__titulo">{props.title}</h3>
                <p class="tarjeta__productos__parrafo"> {props.material}</p>
                <span class="tarjeta__producto__monto"> {props.precio} </span>
                <CardActions>
                        <button className="cardButton" size="small">Detalle del Producto</button>
                        <button className="cardButton" size="small">Stock:</button>
                </CardActions>
            </div>


        </>
    );
}

export default Item;