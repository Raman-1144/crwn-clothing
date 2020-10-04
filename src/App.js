import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from '../src/components/header/header.component';
import HomePage from '../src/components/pages/homepage/homepage.component';
import ShopPage from '../src/components/pages/shop/shop.component';
import SignInAndSignUpPage from '../src/components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
