import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser, setTokenId } from '../slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const {register, handleSubmit,formState:{errors}} = useForm() 
 const dispatch = useDispatch()


  const submit = async (data) =>{
    let auth = await dispatch(loginUser(data))
    if(auth.payload){
      if(auth.payload.success){
        navigate("/")
        let name = auth.payload.user.name
        toast.success(`${name}, you are success fully logged in`)
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


    
  return (
    <div className='flex items-center justify-center h-screen px-9'>
    {/* box  */}
   <div className=' h-[50vh] w-full '>
   
     <h2 className='text-center text-2xl font-bold tracking-tight text-gray-900'>Log in </h2>
     <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
     <form className=' space-y-6' onSubmit={handleSubmit(submit)}>
    
           <div>
             <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
             <input type="email" className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' placeholder='enter your email' id="email"   {...register('email', {
                    required:"Email is required",
                    pattern:{value : /\S+@+\S+\.\S+/,
                    message:"Email is invalid"
                }
                    })}/>
                {errors.email && <span className='text-xs md:text-sm text-red-700/90 font-semibold'> {errors.email.message}</span>}

           </div>
           <div>
             <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
             <input type="password" className='mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' placeholder='enter your Password' id="password"  {...register('password', {
                    required:"password is required",
                    minLength: {value: 3, message: "password should be at least 3 charater long"}
                }
                )}/>
                {errors.password && <span className='text-xs md:text-sm text-red-700/90 font-semibold'> {errors.password.message}</span>}

           </div>
           
           <div>
             <button type='submit' className=' w-full bg-orange-600/80 hover:bg-orange-600/90 active:bg-orange-600/70 text-white py-1.5 text-sm font-semibold leading-6 shadow-sm ' >
             Log in
             </button>
           </div>
         </form>
   
         <p className='mt-10 text-center text-sm text-gray-500'>
       New User? {" "}
        <Link to="/signin" className='font-semibold  leading-6 text-indigo-600  hover:text-indigo-500'>signin Now</Link>
         </p>
         </div>
         </div>
    
   
   
   
       </div>
  )
}

export default Login
