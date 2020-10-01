import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from '../src/components/header/header.component';
import HomePage from '../src/components/pages/homepage/homepage.component';
import ShopPage from '../src/components/pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
