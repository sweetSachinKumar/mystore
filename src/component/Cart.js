import React from 'react'
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useRemoveFromCartMutation, useUpdateCartMutation } from '../slices/cartSlice'


const Cart = ({item}) => {
    const {_id:id, thumbnail,title,price,quantity} = item
    const [removeFromCart ] = useRemoveFromCartMutation()
    const [updateCart] = useUpdateCartMutation()

  return (
    <div className='flex flex-col sm:flex-row px-1 py-2 my-2  bg-gray-100/60 text-gray-700 gap-3 ' key={id}>

    <div>
      <img src={thumbnail} className='sm:w-20 w-full' alt="idno" />
    </div>
    {/* info */}
    <div className=' px-2  w-full relative  '>
      <div className='mb-5 pr-12'>
        {/* title */}
              <Link to={`/product/${id}`} className='hover:underline underline-offset-4 c'> {title}</Link>
      </div>
      {/* remove icon  */}
      <div onClick={()=> removeFromCart(id)}  className='text-xl cursor-pointer absolute top-8 bg-red-300 p-2 right-4 text-gray-600 hover:text-red-500 transition '>
        <IoMdClose className='' />
      </div>
      <div className='  h-[36px] text-sm flex'>

        {/* qty */}
        <div className='flex flex-1 max-w-[100px] items-center h-full border font-medium text-neutral-600   '> 
          <div onClick={()=> updateCart({id,quantity:quantity - 1})} className='flex-1  h-full flex justify-center items-center cursor-pointer'>
            {/* minus icon  */}
            <IoMdRemove/>
          </div>
          <div>
            {/* amount  */}
            {quantity}
          </div>
          <div onClick={()=> updateCart({id,quantity:quantity+1})} className='flex-1  h-full flex justify-center items-center cursor-pointer'>
            {/* minus icon  */}
            <IoMdAdd/>
          </div>
        </div>
        {/* item price  */}
        <div className='flex items-center font-semibold flex-1 justify-around text-neutral-500 '>$ {parseFloat(price).toFixed(2)}</div>

        {/* item final price  */}
        <div className='flex items-center font-semibold text-blue-950 flex-1 justify-around'>$ {parseFloat(price * quantity).toFixed(2)}</div>
        

      </div> 
      </div> 
  </div>
  )
}

export default Cart
