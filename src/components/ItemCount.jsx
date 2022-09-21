import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState} from 'react';


const ItemCount = ({initial, stock, onAdd}) => {
    const [rate, setRate] = useState(initial);
    
    
    const handleClick =() =>{
        
        if(rate < stock){
         setRate(rate+1);
        }
        
    };

    const handleClick1 =() =>{
        
        if(rate > 1){
            setRate(rate-1);
        }
        
    }




    return(
        <>

           
        
           <div className='button__Detail'>
                <button onClick={handleClick}>
                    <AddIcon/>
                </button> {rate} Items  
                <button onClick={handleClick1}>
                    <RemoveIcon/>
                </button>
                <button class="buy" disabled={initial<=0} onClick={()=> onAdd(rate)}>Add to Cart</button>
            </div>
        
        
        </>
    );
}

export default ItemCount;