import React, { useEffect, useState } from 'react'
import { IoMdCart, IoMdClose, IoMdMenu } from 'react-icons/io'
import { BsPersonFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { useGetAllCartQuery } from '../slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getaUserData, logOutbtn, setTokenId } from '../slices/AuthSlice'
import { toast } from 'react-toastify'


const Navbar = () => {
  const { data } = useGetAllCartQuery()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navItem = [
    { item: "Home", togo: "/" },
    { item: "Product", togo: "/allproductcategory" },
    { item: "Contact Us", togo: "/contact" },
    { item: "Blog", togo: "/blog" },
    { item: "all Orders", togo: "/allorder" },
  
  ]
  const checkUser = useSelector(state => state.auth.authToken)
  const handleLogout = () => {
    dispatch(logOutbtn())
    toast.success("you are logged out")
    setIsOpen(false)
  }



  return (
    <>
      <div className='z-30 shadow shadow-neutral-800/10 transition-shadow fixed left-0 right-0 top-0 bg-neutral-100/80 w-full'>
        <div className='  container mx-auto px-4 py-2  items-center justify-between  hidden lg:flex '>
          {/* logo  */}
          <div className='xl:text-4xl lg:text-2xl text-xl text-bold text-orange-600/90 ' >
            Sachin Kumar
          </div>

          <nav>
            <ul className='flex xl:gap-9 lg:gap-6 gap-4 text-xl xl:text-2xl  '>
              {
                navItem.map(item => <li> <Link to={item.togo} className={`${location.pathname === item.togo ? "text-orange-700" : "text-neutral-800 "}   hover:text-neutral-950 active:text-gray-600`} >{item.item}</Link> </li>)
              }

            </ul>
          </nav>
          {/* link  */}
          <div className='flex lg:gap-6 gap-4'>
            <div>

            </div>

            <Link to="/gotocart" className=' hover:text-neutral-700/80  transition active:text-neutral-950/70 text-neutral-800  text-xl px-6 py-1 rounded-md relative' >

              <IoMdCart size={30} />
              {(data && checkUser) && <span className='text-neutral-100 font-bold font-mono bg-orange-600/80  px-2 rounded-xl absolute z-40 -bottom-1 right-3'>{data?.allcartItem?.length}</span>}

            </Link>

            {
              !checkUser ?

                <>

                  <Link to="/signin" className='border-2 border-transparent bg-neutral-800 text-neutral-100 text-xl px-8 py-1 rounded-md  hover:bg-neutral-900/80 transition hover:border-neutral-900'>sing in</Link>

                  <Link to="/login" className='border-2 border-transparent bg-neutral-800 text-neutral-100 text-xl px-8 py-1 rounded-md  hover:bg-neutral-900/80 transition hover:border-neutral-900'>log in</Link>
                </>
                :
                <>
                  <Link to="/myaccount" className=' hover:text-neutral-700/80  transition active:text-neutral-950/70 text-neutral-800  text-xl px-6 py-1 rounded-md ' >

                    <BsPersonFill size={30} />

                  </Link>
                  <button onClick={handleLogout} className='border-2 border-transparent bg-neutral-800 text-neutral-100 text-xl px-8 py-1 rounded-md  hover:bg-neutral-900/80 transition hover:border-neutral-900' >Logout</button>
                </>
            }
          </div>
        </div>
      </div>


      {/* mobiles  */}
      <div className='z-30 shadow shadow-neutral-800/10 transition-shadow fixed left-0 right-0 top-0 bg-neutral-100/80 w-full '>
        <div className=' container  mx-auto px-2   lg:hidden block'>
          {/* logo  */}
          <div className='flex justify-between items-center '>
            <Link to="/" className='text-xl py-2 sm:text-2xl leading-9 '>
              Sachin Kumar
            </Link>
            <div className='flex  gap-4'>
              <Link to="/gotocart" className=' hover:text-neutral-700/80  transition active:text-neutral-950/70 text-neutral-800  text-xl px-6 py-1 rounded-md relative' >

                <IoMdCart size={30} />
                {(data && checkUser) && <span className='text-neutral-100 font-bold font-mono bg-orange-600/80  px-2 rounded-xl absolute z-40 -bottom-1 right-3'>{data?.allcartItem?.length}</span>}

              </Link>
              <div onClick={() => setIsOpen(!isOpen)} className='text-2xl bg-amber-500/40 z-10 p-2 inline-block rounded-md cursor-pointer transition'>
                {isOpen ? <IoMdClose /> : <IoMdMenu />}
              </div>

            </div>
          </div>

          <nav className={` px-2 transition-all duration-300 absolute top-[3rem] ${isOpen ? "left-0 translate-x-0 translate-y-0" : "scale-50 left-full translate-x-24 translate-y-16"} w-full  origin-bottom-right h-[300px] z-40 bg-neutral-100/95 transform   `}>
            <ul className='flex gap-3 text-xl flex-col my-8'>
              {/* <ul className='flex xl:gap-9 lg:gap-6 gap-4 text-xl lg:text-2xl  '> */}
              {
                navItem.map(item => <li> <Link onClick={() => setIsOpen(false)} to={item.togo} className={`${location.pathname === item.togo ? "text-orange-700 " : "text-neutral-800 "}  hover:text-neutral-950 active:text-gray-600`} >{item.item}</Link> </li>)
              }

            </ul>

            {/* link  */}
            <div className='flex flex-wrap gap-3'>
              {!checkUser ?
                <>
                  <Link onClick={() => setIsOpen(false)} to="signin" className='border-2 border-transparent bg-neutral-800 text-neutral-100 text-xl px-8 py-1 rounded-md  hover:bg-neutral-900/80 transition hover:border-neutral-900'>sing in</Link>
                  <Link to="/login" onClick={() => setIsOpen(false)} className='border-2 border-transparent bg-neutral-800 text-neutral-100 text-xl px-8 py-1 rounded-md  hover:bg-neutral-900/80 transition hover:border-neutral-900'>log in</Link>
                </> :
                <>
                  <Link to="/myaccount" onClick={() => setIsOpen(false)} className='border-2 border-transparent bg-neutral-800 text-neutral-100 text-xl px-8 py-1 rounded-md  hover:bg-neutral-900/80 transition hover:border-neutral-900' >
                    Account
                  </Link>
                  <button onClick={handleLogout} className='border-2 border-transparent bg-neutral-800 text-neutral-100 text-xl px-8 py-1 rounded-md  hover:bg-neutral-900/80 transition hover:border-neutral-900' >Logout</button>
                </>

              }
            </div>

          </nav>
          {isOpen && <div onClick={() => setIsOpen(false)} className='fixed top-0 left-0 w-full h-full bg-slate-800/20 transition-all duration-300 ease-in-out'></div>}
        </div>
      </div>
    </>
  )
}

export default Navbar
