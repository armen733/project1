import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { prod } from './db.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App products={prod}/>
  </BrowserRouter>
)
