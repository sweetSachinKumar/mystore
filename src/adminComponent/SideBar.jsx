import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeVender, setVender } from '../slices/AuthSlice'
import {FiMenu} from 'react-icons/fi'
import {BiSolidDashboard,BiSolidTruck, BiLogOut} from 'react-icons/bi'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import { useDispatch , useSelector} from 'react-redux'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  
  const dispatch = useDispatch()
  const navigator = useNavigate()
  
  const userData = useSelector(state => state.auth.user)
  // const vender = useSelector(state => state.auth.vender)
  


  useEffect(()=> {
    
  if (userData.hasOwnProperty("email")) {
    if (userData?.email === "sachinstore@gmail.com") {
      dispatch(setVender())
    } else {
      dispatch(removeVender())
    
    }

  } }, [])
  return (
    <>
      <div onClick={()=> setIsOpen(!isOpen)} className={`absolute cursor-pointer md:hidden top-2 left-6 md:text-xl  py-1 px-3 m-2 ${!isOpen? "bg-slate-400/10 text-slate-700" :"bg-slate-400/30 text-white"}  z-30`}> <FiMenu/> </div>
    <div className={`h-screen shadow-sm transition-all duration-500 md:sticky fixed top-0 ${!isOpen? "-left-full":"left-0"} z-10 bottom-0`}>
  <aside id="sidenav-8" className="h-full w-64 bg-indigo-800  pt-16 text-white">
    <Link to="/" className="flex items-center text-2xl text-slate-200 justify-center py-8">
      <span>Sachin kumar </span>
    </Link>

    <ul className="px-1 pb-6">
      <li>
        <Link to="/" className="flex items-center px-6 py-2 text-[.85rem] text-gray-300 hover:bg-gray-900/60 rounded-lg transition duration-300 ">
          <span className="mr-2 ">
          <BiSolidDashboard/>
          </span>
          <span className="">Dashboard</span>
        </Link>
      </li>
      <li className="pt-4">
        <span className="px-4 py-4 text-[.7rem] font-bold tracking-wider text-indigo-100"> Product</span>
        <ul>
          <li>
            <Link to="/products" className="flex items-center rounded-lg px-6 py-2 text-[.85rem] transition duration-300 ease-linear hover:bg-gray-900/60">
              <span className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <MdProductionQuantityLimits/>
              </span>
              <span>All Product</span>
            </Link>
          </li>
          
        </ul>
      </li>

      <li className="pt-4">
        <span className="px-4 py-4 text-[.7rem] font-bold tracking-wider text-indigo-100"> Order</span>
        <ul>
          <li>
            <Link to="/orders" className="flex items-center rounded-lg px-6 py-2 text-[.85rem] transition duration-300 ease-linear hover:bg-gray-900/60">
              <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
               <BiSolidTruck/>
              </span>
              <span>All Orders</span>
            </Link>
          </li>
        </ul>
      </li>

      <li className="pt-4">
        <span className="px-4 py-4 text-[.7rem] font-bold tracking-wider text-indigo-100"> User</span>
        <ul>
          <li>
            <Link to="/allusers" className="flex items-center rounded-lg px-6 py-2 text-[.85rem] transition duration-300 ease-linear hover:bg-gray-900/60">
              <span className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
               <FaUsers/>
              </span>
              <span>All Users</span>
            </Link>
          </li>
          <li>
      
            <div onClick={()=> {localStorage.removeItem("token"); dispatch(removeVender()); navigator("/")}} className="flex items-center rounded-lg px-6 py-2 text-[.85rem] transition duration-300 ease-linear hover:bg-gray-900/60">
              <span className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <BiLogOut/>
              </span>
              <span>logout</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</div>

</>

  )
}

export default SideBar
