import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'
import Single from './pages/Single'

function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='cart' element={<Cart />} />
            <Route path='products' element={<Products />} />
            <Route path='single' element={<Single />} />
            <Route path='*' element={<Home />} />
        </Routes>
    </>
  )
}

export default Routing