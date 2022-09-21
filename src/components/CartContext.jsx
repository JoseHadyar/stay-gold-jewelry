import { createContext, useState } from "react";



export const  CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
       
        if(cartList.some(el => el.id === item.id)){

            let index = cartList.findIndex(el => el.id === item.id);
            let product = cartList[index];
            product.qty = product.qty + qty;

        }else{
            let product = {...item, qty};
            setCartList([...cartList, product]);
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    const clear = () => {
        setCartList([]);
    }

    




    return(
        <CartContext.Provider  value={{cartList , addItem, removeItem, clear}}>

            {children}

        </CartContext.Provider>
    );
}

export default CartContextProvider;