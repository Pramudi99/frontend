import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Search from './Components/Search'
import Test from './Components/Test';


export default function App() {
  return (
    <BrowserRouter>  
    <Routes> 
      <Route path="/search" element={<Search/>}/>
      <Route path='/test' element={<Test/>}/>    
    </Routes> 
   </BrowserRouter>   
  )
}
