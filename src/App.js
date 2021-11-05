import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Category } from './components/Category/Category';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar/>

        <Switch> 
            <Route exact path="/">
              Acá iría el inicio si tuviera uno u.u
            </Route>

            <Route path="/alimento/:itemId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/alimento">
              <ItemListContainer texto="La Jungla"/>
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer texto="Alimentos sabor carne:"/>
            </Route >

            <Route path="/ropa">
              Ropa
            </Route>

            <Route path="/otros">
              Otros
            </Route> 
            
            <Route path="/*">
              Error, no se encontró el link al que desea llegar.
            </Route>     
        </Switch>

      </Router>
    </div>
  );
}

export default App;
