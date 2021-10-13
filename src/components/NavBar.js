import './NavBar.css';

export const NavBar = () => {
    return (<nav className="rowFlex">          
                <ul className="navFlex">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Alimento</a></li>
                    <li><a href="#">Ropa</a></li>
                    <li><a href="#">Otros</a></li>
                </ul>
            </nav>
        )
}