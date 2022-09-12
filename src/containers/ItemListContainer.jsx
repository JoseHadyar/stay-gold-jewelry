
import ItemList from '../components/ItemList';


const ItemListContainer = () => {

    const onAdd =(qty) =>{
        alert(`Has agregado ${qty} Items`);
    };

    return(
        <>
       
        <ItemList/>
        </>

    );
}

export default ItemListContainer;