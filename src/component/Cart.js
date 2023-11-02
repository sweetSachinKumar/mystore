import React from 'react'
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'
import {  useRemoveFromCartMutation, useUpdateCartMutation } from '../slices/cartSlice'


const Cart = ({ item }) => {
  const { _id: id, thumbnail, title, price, quantity } = item
  const [removeFromCart] = useRemoveFromCartMutation()
  const [updateCart] = useUpdateCartMutation()

// --- to0 much rerendering here i'll solve it leater : may be with use memo
  // if(result.isSuccess){
  //   toast.success('removed to cart', {
  //     position: "top-right",
  //     autoClose: 1000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
  // }



  return (
    <div className='flex flex-row px-1 py-2 my-2  bg-gray-100/60 text-gray-700 gap-3 ' key={id}>

      <div className='flex flex-col gap-5 ps-1 pb-1'>
        <img src={thumbnail} className=' w-20 ' alt="idno" />
        <div className='sm:hidden'>
        <div className='flex sm:flex-1 max-w-[100px] items-center h-full border font-medium text-neutral-600   '>
    <button disabled={quantity <= 1} onClick={() => updateCart({ id, quantity: quantity - 1 })} className='flex-1 disabled:text-neutral-400/70 h-full flex justify-center items-center cursor-pointer'>
      {/* minus icon  */}
      <IoMdRemove />
    </button>
    <div>
      {/* amount  */}
      {quantity}
    </div>
    <div onClick={() => updateCart({ id, quantity: quantity + 1 })} className='flex-1  h-full flex justify-center items-center cursor-pointer'>
      {/* minus icon  */}
      <IoMdAdd />
    </div>
  </div>
        </div>
      </div>
      {/* info */}
      <div className=' px-2  w-full relative  '>
        <div className='mb-5 pr-12'>
          {/* title */}
          <Link to={`/product/${id}`} className='hover:underline underline-offset-4 c'> {title}</Link>
        </div>
        {/* remove icon  */}
        <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer absolute sm:top-8 bottom-3 sm:bottom-auto bg-red-300 p-2 right-4 text-gray-600 hover:text-red-500 transition '>
          <IoMdClose className='' />
        </div>
        <div className='  sm:h-[36px] text-sm flex    sm:flex-row flex-col gap-4'>

          {/* qty */}
      <div className='flex-1 hidden sm:block ' >
      <div className='flex sm:flex-1 max-w-[100px] items-center h-full border font-medium text-neutral-600   '>
    <button disabled={quantity <= 1} onClick={() => updateCart({ id, quantity: quantity - 1 })} className='flex-1 disabled:text-neutral-400/70 h-full flex justify-center items-center cursor-pointer'>
      {/* minus icon  */}
      <IoMdRemove />
    </button>
    <div>
      {/* amount  */}
      {quantity}
    </div>
    <div onClick={() => updateCart({ id, quantity: quantity + 1 })} className='flex-1  h-full flex justify-center items-center cursor-pointer'>
      {/* minus icon  */}
      <IoMdAdd />
    </div>
  </div>
          </div>
          {/* item price  */}
          <div className='flex justify-between sm:flex-1'>
          <div className='flex items-center font-semibold flex-1 justify-around text-neutral-500 '>$ {parseFloat(price).toFixed(2)}</div>

          {/* item final price  */}
          <div className='flex items-center font-semibold text-blue-950 flex-1 justify-around'>$ {parseFloat(price * quantity).toFixed(2)}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart




// const MyQuantity = ({quantity, id, updateCart}) => {
//   return (
//     <div className='flex sm:flex-1 max-w-[100px] items-center h-full border font-medium text-neutral-600   '>
//     <button disabled={quantity <= 1} onClick={() => updateCart({ id, quantity: quantity - 1 })} className='flex-1 disabled:text-neutral-400/70 h-full flex justify-center items-center cursor-pointer'>
//       {/* minus icon  */}
//       <IoMdRemove />
//     </button>
//     <div>
//       {/* amount  */}
//       {quantity}
//     </div>
//     <div onClick={() => updateCart({ id, quantity: quantity + 1 })} className='flex-1  h-full flex justify-center items-center cursor-pointer'>
//       {/* minus icon  */}
//       <IoMdAdd />
//     </div>
//   </div>
//   )
// }