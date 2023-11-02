import React, { useState, useEffect } from 'react'
import { useGetAllCartQuery } from '../slices/cartSlice'
import Cart from '../component/Cart'
import { useSelector } from 'react-redux'
import Loading from '../component/Loading'
import { Link } from 'react-router-dom'
import MyError from '../component/MyError'
//  can't set error page 

const CartItem = () => {
  const mainProduct = useSelector(state => state.myProduct.arrengedProduct)

  const [total, setTotal] = useState(0)
  const { data, isLoading, isError } = useGetAllCartQuery()
  const checkUser = useSelector(state => state.auth.isUser)

  console.log(Object.keys(mainProduct).length)

  console.log(data)
  useEffect(() => {
    const totals = data?.allcartItem?.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity
    }, 0)
    setTotal(totals)
  }, [data])

  return (
    <div className='py-8 min-h-[80vh] h-full  xl:container sm:px-2 mt-12 mx-auto '>


      {isLoading && <Loading />}

      {/* { Object.keys(mainProduct).length <1  && <MyError/> } */}
      { isError  && <MyError/> }
      
      
      {
        checkUser ?
        <>
          <div className='grid grid-cols-1 xl:grid-cols-12 gap-8 '>
            <div className='col-span-1 xl:col-span-4'>
              {(data) &&
                <div className='p-9 bg-orange-200/80 max-w-sm m-2  md:mb-0  rounded-sm  self-start'>
                  <h2 className='lg:text-2xl text-xl font-semibold text-neutral-900 '>Total Product in cart: {data && data?.allcartItem.length}</h2>
                  <p className='lg:text-xl text-gray-800  text-base mt-2'>  <span>Total Price: </span> <span className='font-semibold '> $ {parseFloat(total).toFixed(2)} </span></p>
                </div>
              }
            </div>
            <div className='container px-5 mx-auto col-span-1 xl:col-span-8'>
              {
                data &&
                data.allcartItem.length === 0? <ZeroItemMSG/> :

                data?.allcartItem.map(item => <Cart item={item} />)
              }
            </div>
          </div>
        </> :
        <div className={`border ${Object.keys(mainProduct).length <1 ? 'hidden': 'flex'} items-center justify-center h-[55vh]`}>
          <CreateAccMSG />
        </div> 
      }
    </div>
  )
}

export default CartItem


// account message error
export const CreateAccMSG = () => {

  return (
    <div className='border p-8 sm:p-12 md:p-16 rounded-md shadow-lg hover:shadow-md'>
      <h2 className='md:text-5xl text-2xl sm:text-3xl font-semibold my-4 md:my-8 text-neutral-800'>You have no account! </h2>
      <p> <span className='text-base md:text-xl'>create your new account Now </span>   <Link to="/signin" className=' text-orange-800 text-xs md:text-base hover:text-orange-900/70 font-bold tracking-wide px-3  underline '>sing in</Link>
      </p>
    </div>
  )
}



const ZeroItemMSG = () => {

  return (
    <div className='flex items-center flex-col h-[30vh] justify-center'>
      <p className='text-xl font-semibold text-neutral-800'>No any item in carts </p>
      <Link to="/" className='text-5xl mt-2 hover:underline transition-all duration-300'>shop Now</Link>

    </div>
  )
}