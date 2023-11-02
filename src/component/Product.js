import React, { useEffect } from 'react'
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import {Link, NavLink } from 'react-router-dom'
import { useAddToCartMutation } from '../slices/cartSlice'
import { toast } from 'react-toastify'

const Product = ({product}) => {

  const [addToCart, result] = useAddToCartMutation()
  const {title,category,price, thumbnail} = product

  useEffect(()=> {
  if(result.isSuccess){
    toast.success('added to cart', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  if(result.isError){
    toast.info(result.error.data.error, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }
}, [result])

  return (
    <>
     


        <div className="group relative overflow-hidden flex   flex-col" key={product._id+Date.now}>
      <div className='  border-2 border-[#e4e4e4]'>
        <div className="h-[300px] flex items-center justify-center  transition duration-300 group-hover:scale-110">
          <img src={thumbnail} className="w-[150px]" alt="/" />
        </div>
        <div className='absolute right-0 top-0 opacity-0 transition m-4  duration-300 group-hover:opacity-100 flex flex-col space-y-5  '>

        <button onClick={()=> addToCart(product)} className=" rounded-md text-l flex items-center justify-center w-14 h-9 text-white  bg-red-500 hover:bg-red-600"><BsPlus size={30}/></button>

        <NavLink to={`/product/${product._id}`} className=" rounded-md w-14 h-9 flex items-center justify-center bg-white hover:drop-shadow-lg shadow-lg "><BsEyeFill  size={20}/></NavLink>


        </div>
      </div>
      <div className='items-self'>
        <div className='text-sm text-gray-500'>{category}</div>
        <Link to={`/product/${product._id}`} className='font-semibold text-gray-900'>{title}</Link>
        <div  className='font-semibold text-orange-600'>$ {price}  </div>
      </div>
    </div>
    </>
  )
}

export default React.memo(Product)
