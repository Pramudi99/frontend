import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Search from './Components/Search'

import SellerLandingPage from './SellerLandingPage';

import Item from './Components/Item';



export default function App() {
  return (
    <BrowserRouter>  
   <Routes> 
    <Route path="/search" element={<Search/>} />   

    <Route path="/sellerlandingpage" element={<SellerLandingPage />} /> 

    <Route path="/item/:id" element={<Item/>} /> 

   </Routes> 
   </BrowserRouter>   
  )
}
