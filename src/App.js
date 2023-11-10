import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
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
import CartDetail from './component/CartDetail'
import Shipping from './component/order/Shipping'
import ConfirmOrder from './component/order/ConfirmOrder'
import PaymentOrd from './component/order/PaymentOrd'
import AllOrder from './component/order/AllOrder'
import AllProduct from './adminComponent/AllProduct'
import OrderAll from './adminComponent/OrderAll'
import Sidebar from './adminComponent/SideBar'
import AdminDs from './adminComponent/AdminDs'
import AdminHome from './adminComponent/AdminHome'
import OrderDetails from './adminComponent/OrderDetails'
import AllUsers from './adminComponent/AllUsers'
import SuccessOrder from './component/order/SuccessOrder'
import { useDispatch, useSelector } from 'react-redux'
import { getaUserData, removeVender, setVender } from './slices/AuthSlice'
const App = () => {

  const dispatch = useDispatch()
  
  
  const userData = useSelector(state => state.auth.user)
  const vender = useSelector(state => state.auth.vender)



    
  if (userData.hasOwnProperty("email")) {
    if (userData?.email === "sachinstore@gmail.com") {
      dispatch(setVender())
    } else {
      dispatch(removeVender())
    
    }

  }

  console.log(vender)













  const useUrl = [
    { togo: "/", component: <Home /> },
    { togo: "/gotocart", component: <CartItem /> },
    { togo: "/product/:id", component: <ProductDetail /> },
    { togo: "/cart/:id", component: <CartDetail /> },
    { togo: "/allproductcategory", component: <AllProductCTGR /> },
    { togo: "/blog", component: <Blog /> },
    { togo: "/contact", component: <Contactus /> },
    { togo: "/signin", component: <Signin /> },
    { togo: "/login", component: <Login /> },
    { togo: "/myaccount", component: <User /> },
    { togo: "/shipping", component: <Shipping /> },
    { togo: "/confirmorder", component: <ConfirmOrder /> },
    { togo: "/payment", component: <PaymentOrd /> },
    { togo: "/allorder", component: <AllOrder /> },
    { togo: "/successorder", component: <SuccessOrder /> },
    { togo: "*", component: <NotFound /> },
  ]



  useEffect(() => {
    dispatch(getaUserData())
  }, [])

  return (
    <div>
      {
        vender ?


          <Router>
            <div className='flex  justify-between w-full'>


              <Sidebar />
              <Routes >
                <Route path='/' element={<AdminHome />} />
                <Route path='/adminds' element={<AdminDs />} />
                <Route path='/products' element={<AllProduct />} />
                <Route path='/orders' element={<OrderAll />} />
                <Route path='/allusers' element={<AllUsers />} />
                <Route path='/orderdetails/:id' element={<OrderDetails />} />
              </Routes>
            </div>
          </Router>
          :
          <Router>
            <Navbar />
            <ToastContainer />
            <Routes>
              {
                useUrl.map(user => <Route path={user.togo} element={user.component} />)
              }
            </Routes>
            <Footer />
          </Router>
      }

    </div>
  )
}

export default App
