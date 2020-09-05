import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Menu from './pages/Menu/';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/menu' component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}