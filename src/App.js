import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart/Cart';
import { ItemTodoContainer } from './components/ItemListContainer/ItemTodoContainer';


function App() {
  return (
  
    <div className="App">
      <CartProvider>

        <Router>
          <NavBar/>

          <Switch> 
              <Route exact path="/">
              <ItemTodoContainer texto="La Jungla"/>
              </Route>

              <Route path="/alimento/:itemId">
                <ItemDetailContainer/>
              </Route>
              <Route path="/alimento">
                <ItemListContainer texto="La Jungla"/>
              </Route>
              <Route path="/category/:categoryId">
                <ItemListContainer/>
              </Route >
            
              <Route path="/cart">
                <Cart/>
              </Route >

             <Route path="/*">
                Error, no se encontró el link al que desea llegar.
              </Route>     
          </Switch>

        </Router>

    </CartProvider>  
    </div>
  
  );
}

export default App;
