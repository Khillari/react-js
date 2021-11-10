import './NavBar.css';
import logo from './logo.png';
import {Carrito} from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (<nav className="rowFlex">
                <div>
                    <Link to={'/'}><img src={logo} className="logo" alt="logo"/></Link>
                </div>
                <ul className="navFlex">
                    <li><Link to={"/"}>Todo</Link></li>
                    <li><Link to={"/category/carne"}>Carne</Link></li>
                    <li><Link to={"/category/pollo"}>Pollo</Link></li>
                    <li><Link to={"/category/pescado"}>Pescado</Link></li>
                    <li><Link to={"/category/mix"}>Mix</Link></li>
                    <Carrito/>
                </ul>
            </nav>
        )
}
