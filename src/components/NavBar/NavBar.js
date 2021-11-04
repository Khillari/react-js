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
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/alimento'}>Alimento</Link></li>
                    <li><Link to={'/ropa'} >Ropa</Link></li>
                    <li><Link to={'/otros'}>Otros</Link></li>
                    <Carrito/>
                </ul>
            </nav>
        )
}