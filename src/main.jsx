import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import MyNavbar from './components/MyNavbar/MyNavbar.jsx'
import Footer from './components/footer/footer.jsx'
//swiper

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MyNavbar/>
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>
)


//npm i react-router-dom
//npm install react-bootstrap bootstrap
//import "bootstrap/dist/css/bootstrap.rtl.min.css"
//npm i react-icons