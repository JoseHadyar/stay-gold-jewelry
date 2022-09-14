import Item from "./Item";
import { useState, useEffect } from 'react';
import customFetch from "../utilities/customFetch";
import dataFromBD from "../utilities/data";
import { useParams } from "react-router-dom";


const ItemList = () => {
    const [data, setData] = useState([])
    const {idCategory} = useParams();


    useEffect(() => {
        if(idCategory) {
            customFetch(2000, dataFromBD.filter(item => item.categoryId === idCategory ))
            .then(result => setData(result) )
            .catch(err => console.log(err))
        } else {
            customFetch(2000, dataFromBD)
            .then(result => setData(result) )
            .catch(err => console.log(err))
        }

    }, [idCategory]);

    return (
        <>
            {
                data.map(item => (
                    <Item
                        id={item.id}
                        key={item.id}
                        // title={item.title}
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