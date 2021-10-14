import './NavBar.css';
import logo from './logo.png';

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
                </ul>
            </nav>
        )
}