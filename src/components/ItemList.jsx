import Item from "./Item";
import { useState, useEffect } from 'react';
import customFetch from "../utilities/customFetch";
import dataFromBD from "../utilities/data";


const ItemList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        // Aca se va a consultar la base de datos
        customFetch(2000, dataFromBD)
            .then(datos => setData(dataFromBD) )
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            {
                data.map(item => (
                    <Item
 
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