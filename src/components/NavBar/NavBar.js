import './NavBar.css';
import logo from './logo.png';
import {Carrito} from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (<nav className="rowFlex">
                <div>
                    <a href="#"><img src={logo} className="logo" alt="logo"/></a>
                </div>          
                <ul className="navFlex">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Alimento</a></li>
                    <li><a href="#">Ropa</a></li>
                    <li><a href="#">Otros</a></li>
                    <Carrito/>
                </ul>
            </nav>
        )
}