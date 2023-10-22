import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => { 
 const [data, setData] = useState({
  name:"",
  email:"",
  password:"",
  confirmPassword:""
 })


 
const onChange = (e)=> {
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
 console.log(data)
 }


  return (
    <div className='flex items-center justify-center h-screen px-9'>
 {/* box  */}
<div className=' h-[50vh] w-full '>

  <h2 className='text-center text-2xl font-bold tracking-tight text-gray-900'>Sign in </h2>
  <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
      <form onSubmit={handleSubmit}  className=' space-y-6'>
        <div>
          <label htmlFor="name" className='block text-sm font-medium leading-6 text-gray-900'>Your Name</label>
          <input required type="text" value={data.name} onChange={onChange} className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' name="name" placeholder='enter your name' id="name" />
        </div>
        <div>
          <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
          <input required type="email" value={data.email} onChange={onChange}  className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' name="email" placeholder='enter your email' id="email" />
        </div>
        <div>
          <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
          <input required type="password" value={data.password} onChange={onChange} className=' mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' name="password" placeholder='enter your Password' id="password" />
        </div>
        <div>
          <label htmlFor="Cpassword"  className='block text-sm font-medium leading-6 text-gray-900'>Confirm Password</label>
          <input required type="password" className='mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' value={data.confirmPassword} onChange={onChange} name="confirmPassword" placeholder='again enter your Password' id="Cpassword" />
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
