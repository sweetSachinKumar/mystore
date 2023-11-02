import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getaUserData } from '../slices/AuthSlice'
import { Link } from 'react-router-dom'
import { CreateAccMSG } from '../pages/CartItem'
import MyError from './MyError'

const User = () => {
    const [getUserError, setGetUserError] = useState(false)
    const userData = useSelector(state => state.auth.user)
    const checkUser = useSelector(state => state.auth.isUser)
    console.log(checkUser)
    const dispatch = useDispatch()
 const months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
useEffect(  ()=> { 
        dispatch(getaUserData())
}, [])

  return (
    <section className='py-24 lg:px-24 px-2 min-h-[70vh] h-full container mx-auto '>
        {
          
          userData.hasOwnProperty("email") ? <div>
                {/* box */}
                <div className='p-12 shadow space-y-5'>
                    <div >
                        <span>Name :</span> <span>{userData?.name}</span>
                    </div>
                    <div>
                        <span>Email :</span> <span>{userData?.email}</span>
                    </div>
                    <div>
                        <span>Member since : </span> <span> {months[new Date(userData?.date).getMonth()]}, {new Date(userData?.date).getFullYear()}  </span>
                    </div>
                    <div>
                        <Link to="/signin" className='text-xs lg:text-base font-semibold text-gray-800 hover:underline w-full text-right mt-6'> create another Account</Link>
                    </div>
                </div>
            </div>:  <CreateAccMSG/>
        }
    </section>
  )
}

export default User
