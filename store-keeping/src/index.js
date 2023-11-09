import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import productsReducer, { productFetch } from "./features/productSlice"
import { productsApi } from './features/productsApi';

const store = configureStore({
  reducer:{
    products: productsReducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(productsApi.middleware);
  }
})

store.dispatch(productFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
        <App />
    </Provider>
  </Router>
);

