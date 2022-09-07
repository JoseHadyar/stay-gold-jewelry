import * as React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';




const Item = (props) => {



    useEffect(()=> {
        console.log("Componente Item se actualizó")
    }, []);

    return (
        <>
            <div className="container">

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
            </div>


        </>
    );
}

export default Item;