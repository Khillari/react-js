import './Cart.css'; 
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import ItemCart from './ItemCart.js';


export const Cart = () => {

    const { cart, clear, removeITem } = useCart();

    return (
        <>
            <h1>Carrito:</h1>
            <div>
                {cart.lenght ? cart.map((inCart) => (
                    <ItemCart key={inCart.id} item={inCart} remove={removeITem} />
                )): "No hay productos en el carrito"}
            </div>
            <button className="btn btn-dark btn-clear" onClick={() => clear()}>Vaciar el carrito</button>
            <Link to="/"><button className="btn btn-dark btn-menu">Volver al menú de compra</button></Link>
        </>
    )
}