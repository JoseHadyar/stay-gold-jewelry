import { createContext, useState } from "react";



export const  CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {

        if(cartList.some(el => el.id === item.id)){
            
            let index = cartList.findIndex(el =>  el.id === item.id);
            let product = cartList[index]; 
            product.qty = product.qty + qty;


            const newCartList = [...cartList];
            newCartList.splice(index, 1, product );
            setCartList([ ...newCartList ]);

        } else{
            let product = {...item, qty};
            setCartList([...cartList, product ]);
        }
    }
    

    function getTotalPrice(){
        let total = 0;
        (cartList.forEach (item => total += item.precio * item.qty))
        return total;
    }

    function getQty(){
        let totalQty = 0;
        (cartList.forEach (item => totalQty += item.qty))
        return totalQty;
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    const clear = () => {
        setCartList([]);
    }





    return(
        <CartContext.Provider  value={{cartList , addItem, removeItem, clear,getTotalPrice , getQty}}>

            {children}

        </CartContext.Provider>
    );
}

export default CartContextProvider;