import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({ 
    email:"",
    password:""
   })
  
  const handleSubmit = (e)=> {
    e.preventDefault()

   console.log(data)
  }

  const handleChange = (e)=> {
    setData({...data, [e.target.name]:e.target.value})
   

  }
  return (
    <div className='flex items-center justify-center h-screen px-9'>
    {/* box  */}
   <div className=' h-[50vh] w-full '>
   
     <h2 className='text-center text-2xl font-bold tracking-tight text-gray-900'>Log in </h2>
     <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
         <form onSubmit={handleSubmit}  className=' space-y-6'>
          
           <div>
             <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
             <input type="email" className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' required name="email" value={data.email} onChange={handleChange} placeholder='enter your email' id="email" />
           </div>
           <div>
             <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
             <input type="password" className='mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-2 sm:text-sm sm:leading-6' required name="password" value={data.password} onChange={handleChange} placeholder='enter your Password' id="password" />
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
