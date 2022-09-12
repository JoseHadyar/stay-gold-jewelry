import { useState, useEffect } from 'react';
import customFetch from "../utilities/customFetch";
import ItemDetail from '../components/ItemDetail'
import dataFromBD from "../utilities/data";
import ItemCount from '../components/ItemCount'


const ItemDetailContainer = () => {

    const onAdd =(qty) =>{
        alert(`Has agregado ${qty} Items`);
    };
    
    const [data, setData] = useState({})

    useEffect(() => {
        customFetch(2000, dataFromBD[0])
            .then(result => setData(result) ) 
            .catch(err => console.log(err))
    }, []);

    

    return (
        <>
        
            <ItemDetail data={data}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />

        </>

    );
}




export default ItemDetailContainer;