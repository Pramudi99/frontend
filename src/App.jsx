import React from 'react'
import GlobalRouter from './routes';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return <div>
    <GlobalRouter/>
    <Toaster/>
  </div>
}
