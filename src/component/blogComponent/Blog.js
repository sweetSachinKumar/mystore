import React from 'react'
import './Blog.css'
import Post from './Post'
import SideBar from './SideBar'
const Blog = () => {
    return (
        <div className='w-full '>
            {/* blog banner  */}

            <div className='h-[400px] relative img-post md:h-[500px] lg:h-[600px]  w-full  flex items-center p-2     '>
                <div>
                <div className='flex items-center'> <p className='w-[30px] lg:w-[60px] lg:h-[3px] h-[2px] bg-orange-900 mr-2'></p> <p className='font-semibold text-sm  text-slate-900 shadow-lg text-clip md:text-base '>Choose your best Choice</p></div>
                <h1 className='text-5xl md:text-7xl capitalize font-semibold text-slate-800 ' style={{textShadow:"2px 0 7px #ccc"}}> Product's blog</h1>
                </div>
                {/* <img src={blog_banner} className='object-cover object-center w-full h-full' alt="banner" /> */}

            </div>


    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8  container mx-auto'>

{/* set of boxes */}
        <div className='mt-4 flex items-center justify-evenly md:justify-stretch md:items-stretch flex-wrap gap-6 md:grid
        md:grid-cols-2
            lg:gap-y-16 xl:grid-cols-3
           col-span-1 lg:col-span-8 '>
        {/* box  */}
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>

        </div> 
<div className='col-span-1 lg:col-span-4 '>
<SideBar/>
</div>
        </div>


</div>
    )
}

export default Blog
