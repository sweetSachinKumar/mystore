import React from 'react'
import { useNavigate,useLocation} from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
  return (
    <div className='flex items-center justify-center h-screen'>
     <div className='-mt-44'>
        <button onClick={()=> navigate("/")}  className='absolute top-24 left-7 bg-slate-800 text-white hover:bg-slate-800/80 active:bg-slate-800/90 px-3 py-1.5 rounded-sm' >&larr; go Home page</button>
        <h2 className='text-sm sm:text-base font-semibold text-gray-700'>http://localhost:3000{location.pathname}</h2>
         <span className='text-5xl sm:text-7xl font-bold text-orange-800'>Not Found</span> 
         </div>
    </div>
  )
}

export default NotFound
