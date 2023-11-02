import React from 'react'
import womanBrand from '../img/woman_hero.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
 <section  className='  justify-around flex   items-center h-[440px] md:h-[500px] lg:h-[80vh] -ml-2 -mt-3 px-6 overflow-hidden bg-orange-600/40'>
        <div>
            <div className='flex items-center text-xs md:text-base uppercase'>
                <div className='w-9 bg-red-500 mr-2 h-0.5'></div>
                <div> new Style </div>
            </div>
            <div>
                <div className=' mb-4  uppercase leading-[1.1] lg:text-6xl text-3xl md:text-5xl font-light'>
                    Autumn Sale stylesh <br /> <span className='font-semibold'>Mans & womans </span>
                </div>
            </div>
            <Link to="/allproductcategory" className="md:text-xl  text-xs border-b-2 self-start border-gray-900">
            Discover More
            </Link>
            </div>
            <img src={womanBrand} className='hidden lg:block h-full' alt="" />
      </section>
    </>
  )
}

export default Banner
