import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getUserInfo, setVender } from '../slices/AuthSlice'
import { Link, useNavigate } from 'react-router-dom'
import { CreateAccMSG } from '../pages/CartItem'
import MyError from './MyError'
import { useGetAllUserQuery } from '../slices/AuthApis'

const User = () => {
    const userData = useSelector(state => state.auth.user)
    const checkUser = useSelector(state => state.auth.isUser)
    const  navigate = useNavigate()
    const dispatch = useDispatch()
 const months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

 console.log(userData)

    const  {data, isLoading} = useGetAllUserQuery()
const GotoAdmin = () => {
     dispatch(setVender());
      navigate("/")
    }

useEffect(()=> {
    dispatch(getUserInfo())
},[])

  return (
    <section className='py-24 lg:px-24 px-2 min-h-[70vh] h-full container mx-auto '>
        {
         
          userData?.hasOwnProperty("email") ? <div>
                {/* box */}
                <div className='p-12 shadow space-y-5'>
                    <div >
                        <span>Name:</span> <span>{userData?.name}</span>
                    </div>
                    <div>
                        <span>Email:</span> <span>{userData?.email}</span>
                    </div>
                    <div>
                        <span>Member since: </span> <span> {months[new Date(userData?.date).getMonth()]}, {new Date(userData?.date).getFullYear()}  </span>
                    </div>
                  {userData?.email === "sachinstore@gmail.com" &&  <div>
                        <button onClick={GotoAdmin}  to="/allorder" className='text-xs lg:text-base font-semibold px-6 py-1 bg-orange-500/70 text-gray-800 hover:underline w-full  mt-6'> Go to admin page</button>
                    </div>}

                 <div>
                        <Link to="/allorder"  className='text-xs lg:text-base font-semibold text-gray-800 hover:underline w-full text-right mt-6'> View all orders</Link>
                    </div>
                </div>
            </div>:  <CreateAccMSG/>
        }
    </section>
  )
}

export default User
