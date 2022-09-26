import React from 'react'


const ItemCart = ({ product }) => {

    return (
        <div>
            <p>nombre: {product.title}</p>
            <p>cantidad: {product.qty}</p>
            <p>precio por unidad: {product.precio}</p>
            <p>Subtotal:${product.qty * product.precio} </p>
        </div>
    )
}

export default ItemCart;