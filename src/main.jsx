import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ForceTop from './components/ForceTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ForceTop/>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
