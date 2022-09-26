import '../App.css';
import ItemCount from '../components/ItemCount';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const ctx = useContext(CartContext);

    const onAdd = (qty) => {
        setGoToCart(qty);
        ctx.addItem(data, qty)
        
    };

    return (
        <>
            <div className='container'>
                <div className='detail'>
                    <img className='detail__image' src={data.img} alt="" />
                    <div className='content'>
                        <h1>{data.title}</h1>
                        <p>Material: {data.material}</p>
                        <p>${data.precio}ARS</p>
                        <p>Stock: {data.stock} unidades</p>
                        {
                            goToCart
                                ? <Link to='/cart'>Terminar compra</Link>
                                : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                        }

                    </div>

                </div>

            </div>

        </>

    );
}

export default ItemDetail;
