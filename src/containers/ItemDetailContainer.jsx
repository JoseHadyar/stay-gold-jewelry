import { useState, useEffect } from 'react';
import customFetch from "../utilities/customFetch";
import ItemDetail from '../components/ItemDetail'
import dataFromBD from "../utilities/data";
import ItemCount from '../components/ItemCount'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const onAdd =(qty) =>{
        alert(`Has agregado ${qty} Items`);
    };
    
    const [data, setData] = useState({})
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(2000, dataFromBD.find(item => item.id === idItem))
            .then(result => setData(result) ) 
            .catch(err => console.log(err))
    }, [idItem]);

    

    return (
        <>
        
            <ItemDetail data={data}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />

        </>

    );
}




export default ItemDetailContainer;