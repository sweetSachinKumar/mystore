import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Link} from "react-router-dom"

const Footer = () => {
    const navItem = [
        { item: "Home", togo: "/" },
        { item: "Product", togo: "/allproductcategory" },
        { item: "Contact Us", togo: "/contact" },
        { item: "Blog", togo: "/blog" },
      ]
    
    const navItem2 = [
        { item: "Sign in", togo: "/signin" },
        { item: "Login", togo: "/login" },
        { item: "Cart ", togo: "/gotocart" },
      ]
    
  return (
    <div className='bg-gray-100 px-8 md:px-4 py-16 '>
      <div className='container mx-auto  '>
        <div className='sm:flex justify-between text-center items-center'>
        <h2 className='xl:text-4xl lg:text-2xl text-xl font-semibold text-orange-600/90 ' >
            Sachin Kumar
          </h2>
            <div className='flex justify-around sm:w-[200px] m-6'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>

        </div>
        <div className='flex justify-between'>
            <ul className='lg:flex'>
            {
                navItem.map(item => <li> <Link to={item.togo} className="p-4 block font-semibold text-neutral-800 " >{item.item}</Link> </li>)
              }
            </ul>
            <ul className='lg:flex '>
            {
                navItem2.map(item => <li> <Link to={item.togo} className="p-4 block font-semibold text-neutral-800" >{item.item}</Link> </li>)
              }
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
