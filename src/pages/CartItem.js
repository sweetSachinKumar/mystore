import React, { useState, useEffect } from 'react'
import { useGetAllCartQuery } from '../slices/cartSlice'
import Cart from '../component/Cart'

const CartItem = () => {
  const [total, setTotal] = useState(0)
  const { data, isLoading, isError } = useGetAllCartQuery()



  useEffect(() => {
    const totals = data?.allcartItem?.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity

    }, 0)
    setTotal(totals)
  }, [data])
 
 
  return (
    <>


      <div className='xl:container px-2 mt-12 mx-auto grid grid-cols-1 xl:grid-cols-12 gap-24 py-8 '>
        { data &&
        <div className='p-9 bg-orange-200/80 max-w-sm m-2 mb-12 md:mb-0  rounded-sm col-span-1 xl:col-span-4 self-start'>
          <h2 className='lg:text-2xl text-xl font-semibold text-neutral-900 '>Total Product in cart: {data.allcartItem.length ? data.allcartItem?.length: "0" }</h2>
          <p className='lg:text-xl text-gray-800  text-base mt-2'>  <span>Total Price: </span> <span className='font-semibold '> $ {parseFloat(total).toFixed(2)} </span></p>
        </div>
        }

        <div className='container px-5 mx-auto col-span-1 xl:col-span-8'>
          {isLoading && <h3>Loading...</h3>}
          {isError && <h3>some error occured... <br/> {isError} </h3>}
          {
            data && data.allcartItem?.map(item => <Cart item={item} />)
          }
        </div>
 
      </div>
    </>
  )
}

export default CartItem
