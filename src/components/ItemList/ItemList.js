import './ItemList.css';
import Item from '../Item/Item';

export const ItemList = ({product}) => {
    
    return (
        <>
            <Item id={product.id}
            name={product.name}
            description={product.description} 
            price={product.price} 
            img={product.img}/>
        </>
    );
};

export default ItemList;

