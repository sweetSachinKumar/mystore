import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { createUser, setTokenId } from '../slices/AuthSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

const Signin = () => { 
  const navigate = useNavigate()
  const {register, handleSubmit, watch, formState:{errors}} = useForm()
const dispatch = useDispatch()

const password = watch('password')
  

const submit = async (data) =>{
  let auth = await  dispatch(createUser(data))
  if(auth.payload){
    if(auth.payload.success){
      navigate("/")
      let name = auth.payload.user.name
      toast.success(`${name}, your account is success fully created`)
  dispatch(setTokenId())

    }
    else if(auth.payload.error) {
    
      let info = auth.payload.error
      toast.warn(`${info}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      console.log(auth)
    }
  }}


 
// const onChange = (e)=> {
//     setData({...data, [e.target.name]:e.target.value})
//   }
 
  return (
    <div className='flex items-center justify-center h-screen px-9'>
 {/* box  */}
<div className=' h-full pt-24 pb-16 w-full '>

  <h2 className='text-center text-2xl font-bold tracking-tight text-gray-900'>Sign in </h2>
  <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
      <form onSubmit={handleSubmit(submit)}  className=' space-y-6'>
        <div>
          <label htmlFor="name" className='block text-sm font-medium leading-6 text-gray-900'>Your Name</label>
          <input  type="text" className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' name="name" placeholder='enter your name' id="name" {...register('name', {required:"Name is required"})} />
   { errors.name && <span className='text-xs md:text-sm text-red-700/90 font-semibold'>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
          <input   className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' name="email" placeholder='enter your email' id="email"   {...register('email', {
                    required:"Email is required",
                    pattern:{value : /\S+@+\S+\.\S+/,
                    message:"Email is invalid"
                }
                    })}  />
                {errors.email && <span className='text-xs md:text-sm text-red-700/90 font-semibold'> {errors.email.message}</span>}


        </div>
        <div>
          <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
          <input type='password' className=' mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' name="password" placeholder='enter your Password' id="password"
          {...register('password', {
            required:"password is required",
            minLength: {value: 3, message: "password should be at least 3 charater long"}
        }
        )} />
                {errors.password && <span className='text-xs md:text-sm text-red-700/90 font-semibold'> {errors.password.message}</span>}

        </div>
        <div>
          <label htmlFor="Cpassword"  className='block text-sm font-medium leading-6 text-gray-900'>Confirm Password</label>
          <input   type="password" className='mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6'  name="confirmPassword" placeholder='again enter your Password' id="Cpassword" {...register('Conpassword', {
                    required:"conform password is required",
                    minLength: {value: 3, message: "password should be at least 3 charater long"},
                    validate: value => value === password || "password do not match"
                }
                )} />
                {errors.Conpassword && <span className='text-xs md:text-sm text-red-700/90 font-semibold'> {errors.Conpassword.message}</span>}

        </div>
        <div>
          <button type='submit' className=' w-full bg-orange-600/80 hover:bg-orange-600/90 active:bg-orange-600/70 text-white py-1.5 text-sm font-semibold leading-6 shadow-sm ' >
          Sign in
          </button>
        </div>
      </form>

      <p className='mt-10 text-center text-sm text-gray-500'>
    already have account? {" "}
     <Link to="/login" className='font-semibold  leading-6 text-indigo-600  hover:text-indigo-500'>Login Now</Link>
      </p>
      </div>
      </div>
 



    </div>
  )
}

export default Signin
