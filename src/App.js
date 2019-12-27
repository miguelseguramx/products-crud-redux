import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store'

import Products from './components/Products'
import Header from './components/Header'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'

function App(props) {
  return (
    <Router>
      <Provider store={store}>
        <Header></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Products}></Route>
              <Route exact path="/productos/nuevo" component={NewProduct}></Route>
              <Route exact path="/productos/editar/:id" component={EditProduct}></Route>
            </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;