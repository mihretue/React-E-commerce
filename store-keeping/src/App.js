import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Navbar from "./components/pages/navbar"
import Products from "./components/pages/productsList"
import Cart from "./components/pages/cart"
import About from './components/pages/about'
import ProductDetail from "./components/pages/productDetail"
import Nopage from "./components/pages/noPage"
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes } from "react-router-dom"
import React, {Component} from 'react'



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='/products' Component={Products}/>
        <Route path='/carts' Component={Cart}/>
        <Route path='/productDetail' Component={ProductDetail}/>
        <Route path='/about' Component={About}/>
        <Route path='/noPage' Component={Nopage}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
