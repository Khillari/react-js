import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ProductosApi from '../API/productos.json';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getFirestore } from "../../Firebase/Index";
import { doc, getDoc, collection, query, where, getDocs} from "firebase/firestore";

    export const ItemTodoContainer = (props) => {

        const [products, setProductos] = useState([]);
        
        useEffect(() => {
            const db = getFirestore();
            const q = query(collection(db, "items"));

            getDocs(q).then((snapshot) => {
              setProductos(
                snapshot.docs.map((doc) => {
                  const newDoc = { ...doc.data(), id: doc.id };
                  return newDoc;
                })
              );
            });
          }, []);


    return (<div>
                <h1>{props.texto}</h1>

                <div>
                    <div className="container">
                        {products && products.map((product) =>         
                            <ItemList product={product} key={product.id}/>)}       
                    </div>
                </div>

            </div> 
        )   
}