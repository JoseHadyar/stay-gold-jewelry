import { useState, useEffect } from 'react';
import customFetch from "../utilities/customFetch";
import ItemDetail from '../components/ItemDetail'
import dataFromBD from "../utilities/data";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const {idItem} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos',idItem);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [idItem]);

    

    return (
        <>
        
            <ItemDetail data={data}/>
            

        </>

    );
}




export default ItemDetailContainer;