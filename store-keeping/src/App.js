import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Navbar from "./components/pages/navbar"
import Products from "./components/pages/productsList"
import Cart from "./components/pages/cart"
import About from './components/pages/about'
import ProductDetail from "./components/pages/productDetail"
import Nopage from "./components/pages/noPage"
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import React from 'react'



function App() {
  return (
    
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route exact path='/' component={Products}/>
        <Route path='/carts' component={Cart}/>
        <Route path='/productDetail' component={ProductDetail}/>
        <Route path='/about' component={About}/>
        <Route path='/*' component={Nopage}/>
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
