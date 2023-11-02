import React, { useEffect } from 'react'
import Home from './pages/Home'
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom'
import CartItem from './pages/CartItem'
import ProductDetail from './component/ProductDetail'
import AllProductCTGR from './component/AllProductCTGR'
import Signin from './component/Signin'
import Login from './component/Login'
import Navbar from './component/Navbar'
import NotFound from './component/NotFound'
import Contactus from './component/Contactus'
import Blog from './component/blogComponent/Blog'
import Footer from './component/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import User from './component/User'

const App = () => {
useEffect(()=> {
  console.log('nothing')
},[])
  return (
    <div>
      <Router>
        <Navbar/>
        <ToastContainer/>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/gotocart' element={<CartItem/>} />
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/allproductcategory' element={<AllProductCTGR/>}/>
          <Route path='/contact' element={<Contactus/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/myaccount' element={<User/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>

      {/* product/6538b7db95a5a0e6b30f5d10 */}
      {/* product/652ffe872860373c227406b5 */}
     
    </div>
  )
}

export default App
