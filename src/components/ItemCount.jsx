import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';


const ItemCount = ({ initial, stock, onAdd }) => {
    const [qty, setQty] = useState(initial);
    const [setshowButton] = useState(false);


    const addProduct = (num) => {
        setQty(qty + num);
    };




    return (
        <>



            <div className='button__Detail'>
                <button
                    onClick={() => addProduct(-1)}
                    disabled= {qty === initial ? true : null} 
                >
                    <RemoveIcon />
                </button>
                <span>{qty}</span>
                <button
                    onClick={() => addProduct(+1)}
                    disabled={qty === stock ? true : null}
                    >
                    <AddIcon />
                </button>

                <button 
                class="buy"
                onClick={() => {onAdd(qty); setshowButton(true)}}
                disabled={stock === 0 ? true : null}>Add to Cart</button>
            </div>


        </>
    );
}

export default ItemCount;