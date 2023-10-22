import React from 'react'
import blog_banner from '../../img/post.jpg'

const Post = () => {
  return (
    <>
       <div className='max-w-xs  max-h-[300px] m-2'>
            
            <img src={blog_banner} alt="img" className='w-full h-full object-cover object-center rounded-md' />
            {/* info  */}
            <div className='h-full w-full'>
            <p className='text-sm font-semibold text-orange-500 lg:text-base'>category</p>
            <p className='font-semibold text-gray-900 lg:text-xl'>title</p>
            </div>
          </div>
    </>
  )
}

export default Post
