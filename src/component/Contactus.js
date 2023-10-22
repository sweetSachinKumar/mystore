import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../img/post.jpg'
const Contactus = () => {





const handleSubmit = (e)=> {
    e.preventDefault()
}




  return (
    <div>
      

      <div className='flex  pt-16 flex-col md:flex-row items-center justify-center h-screen px-9'>

<div className=' m-4 p-1 h-full md:max-h-[500px] md:max-w-md max-h-[200px] w-full'>
    <img src={cover} alt="cover" className=' p-2 w-full h-full object-cover object-center' />
</div>


    {/* box  */}
   <div className=' h-[500px] max-w-md ml-4 mt-11 w-full '>
   
     <h2 className='text-center text-2xl font-bold tracking-tight text-gray-900'>Feel free to contact us </h2>
     <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
         <form onSubmit={handleSubmit}  className=' space-y-6'>
          
           <div>
             <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
             <input type="email" className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6' required name="" placeholder='enter your email' id="email" />
           </div>
           <div>
             <label htmlFor="comment" className='block text-sm font-medium leading-6 text-gray-900'>Your comment</label>
            <textarea name="" className='block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 focus:ring-2 focus:ring-inset focus:ring-orange-200  resize-none ' id="" cols="30" rows="10"></textarea>
           </div>
           
           <div className='text-center'>
             <button type='submit' className='  px-6 rounded-md bg-orange-600/80 hover:bg-orange-600/90 active:bg-orange-600/70 text-white py-1.5 text-sm font-semibold leading-6 shadow-sm ' >
             submit
             </button>
           </div>
         </form>
   
         
         </div>
         </div>
    
   
   
   
       </div>
    </div>
  )
}

export default Contactus
