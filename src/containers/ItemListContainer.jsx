import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList';


const ItemListContainer = () => {

    const onAdd =(qty) =>{
        alert(`Has agregado ${qty} Items`);
    };

    return(
        <>
        {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
        <ItemList/>
        </>

    );
}

export default ItemListContainer;