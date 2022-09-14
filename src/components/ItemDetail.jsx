import '../App.css';


const ItemDetail = ({data}) => {

    return(
        <>
        <div className='container'>
            <div className='detail'>
                <img className='detail__image' src={data.img} alt="" />
                <div className='content'>
                    <h1>{data.title}</h1>
                    <p>Material: {data.material}</p>
                    <p>{data.precio}ARS</p>
                    <p>Stock: {data.stock} unidades</p>
                </div>

            </div>

        </div>
        
        </>

    );
}

export default ItemDetail;
