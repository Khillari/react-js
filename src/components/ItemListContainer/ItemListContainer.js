import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ProductosApi from '../API/productos.json';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';


/*export const ItemListContainer = (props) => {
    const [products, setProductos] = useState([]);

    const getProductos = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Ha ocurrido un error.");
                }
            }, 2000);
        });

        useEffect(() => {
            getProductos(ProductosApi)
            .then((result) => setProductos(result))
            .catch((err) => console.log(err));
        }, []);*/


        export const ItemListContainer = (props) => {

            const [products, setProductos] = useState([]);
        
            const {categoryId} = useParams ();
        
            const getProductos = (data) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (data) {
                            resolve(data);
                        } else {
                            reject("Ha ocurrido un error.");
                        }
                    }, 2000);
                });
        
                useEffect(() => {
                    getProductos(ProductosApi)
                    .then((result) => setProductos(result.filter((products) => products.category === categoryId)))
                    .catch((err) => console.log(err));
                }, [categoryId]);


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