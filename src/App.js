import React from 'react'
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
import Alert from './component/Alert'

const App = () => {

  return (
    <div>
      <Router>
        <Navbar/>
        <Alert/>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/gotocart' element={<CartItem/>} />
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/allproductcategory' element={<AllProductCTGR/>}/>
          <Route path='/contact' element={<Contactus/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>

      
     
    </div>
  )
}

export default App
