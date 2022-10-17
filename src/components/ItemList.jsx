import Item from "./Item";
import { useState, useEffect } from 'react';
import customFetch from "../utilities/customFetch";
import dataFromBD from "../utilities/data";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemList = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams();


    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (idCategory) {
            const queryFilter = query(queryCollection, where('categoryId', '==', idCategory))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...res.data() }))))
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({ id: product.id, ...res.data() }))))
        }
    }, [idCategory]);

    return (
        <>
            {
                dataFromBD.map(item => (
                    <Item
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        // material={item.material}
                        img={item.img}
                    // precio={item.precio}
                    />
                ))
            }

        </>

    );
}







export default ItemList;