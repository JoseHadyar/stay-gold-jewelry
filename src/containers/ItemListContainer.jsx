import ItemCount from '../components/ItemCount'


const ItemListContainer = ({greeting}) => {

    const onAdd =(qty) =>{
        alert(`Has agregado ${qty} Items`);
    };

    return(
        <>
        <div>{greeting}</div>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>

    );
}

export default ItemListContainer;