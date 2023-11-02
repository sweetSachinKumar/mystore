import React from 'react'
import cover from '../img/post.jpg'
const Contactus = () => {





  const handleSubmit = (e) => {
    e.preventDefault()
  }




  return (
   <div className='max-w-[1140px] mx-auto px-4 pt-32 pb-16'>
    <h2 className='text-xl md:text-3xl text-center text-gray-700 font-bold'>Feel Free to Contact Us</h2>
    <p className=' md:text-xl text-center text-gray-700 font-semibold pt-2 mb-8'>Send a message</p>

    <div className='flex gap-5 flex-col md:flex-row  max-w-[800px] mx-auto justify-around'>

      <img src={cover} className='h-[200px] md:h-[600px] rounded-md md:w-[400px] object-cover object-right-bottom w-full mb-5 ' alt="" />
      <form onSubmit={handleSubmit} className='w-full'>
        <div className='flex flex-col p-4'>
        <div className='flex flex-col gap-1 m-2'>
          <label htmlFor="">Your Name</label>
          <input type="text" name="" className='border p-2 rounded-md' placeholder='enter your name' id="" />
        </div>
        <div className='flex flex-col gap-1 m-2 '>
          <label htmlFor="">Email</label>
          <input type="email"  className='border p-2 rounded-md '  placeholder='enter your email' name="" id="" />
        </div>
        <div className='flex flex-col gap-1 m-2 '>
          <label htmlFor="">Phone no</label>
          <input type="tel"  className='border p-2 rounded-md ' required  placeholder='enter your phone no.' name="" id="" />
          <span className='text-xs md:text-sm text-gray-700'>in case if we would like to contact you</span>
        </div>
        
        <div className='flex flex-col gap-1 m-2'>
          <label htmlFor="">Your Comment</label>
          <textarea name=""  className='border p-2 rounded-md ' placeholder='write comment' id="" cols="30" rows="10"></textarea>
        </div>
        
          <button className='bg-neutral-700 hover:bg-neutral-700/80 active:bg-neutral-700/60 p-2 text-white rounded-md m-2'  type="submit">Submit</button>
        
        </div>
      </form>
    </div>
   </div>

  )
}

export default Contactus
