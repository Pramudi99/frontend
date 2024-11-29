import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Search from './Components/Search'


export default function App() {
  return (
    <BrowserRouter>  
   <Routes> 
    <Route path="/search" element={<Search/>} />    
   </Routes> 
   </BrowserRouter>   
  )
}
