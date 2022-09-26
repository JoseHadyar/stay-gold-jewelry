import * as React from 'react';
import '../App.css';


import { useEffect } from 'react';
import { Link } from 'react-router-dom';




const Item = (props) => {



    useEffect(() => {

    }, []);

    return (
        <>

            <div class="capa__tarjeta__productos">
                <Link to={`/item/${props.id}`}>
                <div class="tarjeta__productos">

                    <img class="tarjeta__productos__imagen" src={props.img} alt="" />

                    <h3 class="tarjeta__productos__titulo">{props.title}</h3>
                    <p class="tarjeta__productos__parrafo"> {props.material}</p>
                    <span class="tarjeta__producto__monto"> ${props.precio} </span>
                </div>
                </Link>
            </div>


        </>
    );
}

export default Item;