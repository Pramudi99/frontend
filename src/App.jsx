import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Search from './Components/Search'
import SellerLandingPage from './Components/SellerLandingPage';
import Item from './Components/Item';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Sidebar from './Components/Sidebar';



export default function App() {
  return (
    <BrowserRouter>  
   <Routes> 
    <Route path="/search" element={<Search/>} />   
    <Route path="/item/:id" element={<Item/>} /> 

    <Route path="/login" element={<LoginPage/>} /> 
    <Route path="/register" element={<RegisterPage/>} />

    <Route path="/dashboard" element={<Sidebar/>} /> 
    <Route path="/seller-landing-page" element={<SellerLandingPage/>} />

   </Routes> 
   </BrowserRouter>   
  )
}
