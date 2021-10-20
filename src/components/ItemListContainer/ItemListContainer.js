import './ItemListContainer.css';
import { Counter } from '../ItemCount/ItemCount';

export const ItemListContainer = (props) => {
    return (<div>
                <h1>{props.texto}</h1>
                <Counter stock="20"/>
            </div>
        )
}