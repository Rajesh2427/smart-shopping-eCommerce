import React from 'react';
import {Route, Routes } from 'react-router-dom';


import './App.css';
import Cart from './components/Cart';
import Categories from './components/categories/Categories';
import DisplayCategories from './components/categories/DisplayCategories';
import Home from './components/Home';
import Login from './components/login/Login';
import Header from './components/navbar/Header';
import ProductPage from './components/pages/productPage/ProductPage';
import SearchFeed from './components/navbar/SearchFeed';
import ProductList from './components/ProductList';


import Signup from './components/signup/Signup';

function App() {
  return (
   <div style={{background:'#FFFFFF'}} >
    <Header/>
    <Categories/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='search/:searchTerm' element={<SearchFeed/>} />
      <Route path='login' element={<Login/>}/>
      <Route  path='signup'  element={<Signup/>}/>
      <Route  path='cart'  element={<Cart/>}/>
      <Route  path='categories/:category'  element={<DisplayCategories/>}/>
      <Route  path='product/:product'  element={<ProductPage/>}/>
      
    </Routes>
    
    
    
    
    
   </div>
  );
}

export default App;
