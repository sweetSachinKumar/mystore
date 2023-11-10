import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import SuborderItem from './SuborderItem'
import { TotalMoney, orderPrice, allOrderItems } from './orderSlice'

const ConfirmOrder = () => {
  const orderData = useSelector(state => state.orderData?.shippingData)
  const orderItems = useSelector(state => state.orderData?.orderItems)
  const totalMoney = useSelector(state => state.orderData?.TotalMoney)
  const userData = useSelector(state => state.auth.user)
  const navigate = useNavigate()
  const [moneyMng, setMoneyMng] = useState({total:0,shipping_Charge:40})
  let Totalmoney =  moneyMng.shipping_Charge*orderItems.length + moneyMng.total
  
const itemInfo = orderItems.map(order=> ({...order, ...orderData}))




const dispatch = useDispatch()




  useEffect(() => {

    setMoneyMng(prev => ({...prev, total:totalMoney}))
   
    }, [totalMoney])


  const GoToPay = ()=> {

    dispatch(allOrderItems(itemInfo))
    dispatch(orderPrice(Totalmoney))
    navigate("/payment")

  }


  

  return (
    <div className='mt-28 mb-32 px-6'>
      <div className="container mx-auto px-8 sm:px-0">
  <div className="flex h-[15vh] items-center justify-center">
    <div className="relative mx-auto flex  sm:w-[89%] w-full items-center justify-between">
      <div className="relative bg-white p-3">
        <span className="text-xl text-orange-500 md:text-2xl"> ss</span>
        <p className="absolute -left-4 top-12 w-32 text-xs font-semibold text-neutral-700">shipping Detail</p>
      </div>

      <div className="relative bg-white p-3">
        <span className="text-xl text-orange-500 md:text-2xl"> mm </span>
        <p className="absolute -left-4 top-12 w-32 text-xs font-semibold text-neutral-700">Confirm Order</p>
      </div>

      <div className="relative bg-white p-3">
        <span className="text-xl text-gray-500/80 md:text-2xl"> lls </span>
        <p className="absolute -left-4 top-12 w-32 text-xs font-semibold text-neutral-700">Payment</p>
      </div>

      <div className="absolute -z-10 h-[2px] w-full bg-slate-400">
        <div className="h-full w-[50%] bg-orange-400/75"></div>
      </div>
    </div>
  </div>

  <div className="mt-16 grid items-start px-3 sm:grid-cols-12 sm:px-0">
    {/* <!-- row1 --> */}
    <div className="sm:col-span-8 sm:border-r">
      <div>
        <h3 className="text-2xl font-semibold text-neutral-800/90 sm:text-3xl">Shipping Info</h3>
        <div className="space-y-1 p-3 text-xs sm:p-8 sm:text-sm lg:text-base">
          <p><span>Name:</span> <span>{orderData.username}</span></p>
          <p><span>Phone:</span> <span>{orderData.phone}</span></p>
          <p><span>Address:</span> <span>{orderData.address} </span></p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-neutral-800/90 sm:text-3xl">Your cart Items:</h3>
        <div className="pt-3 sm:p-8">

    {
        orderItems?.map(item => <SuborderItem item={item} />)
    }

          
        </div>
      </div>
    </div>
    {/* <!-- row 2 --> */}

    <div className="mx-auto mt-16 flex w-full max-w-xs flex-col items-center justify-center sm:col-span-4">
      <h4 className="text-xl font-semibold text-neutral-800/90 sm:text-2xl">Order Summery</h4>

      <div className="mx-auto my-4 w-full space-y-5 border-b-2 border-t-2 border-gray-300 py-6 sm:w-[80%]">
        <div className="flex justify-between">
          <span className="text-xs font-semibold text-neutral-700 sm:text-sm">Subtotal:</span>
           <span className="text-xs sm:text-sm">$ {parseFloat(moneyMng.total).toFixed(2)}</span>
          </div>

        <div className="flex justify-between">
          <span className="text-xs font-semibold text-neutral-700 sm:text-sm">Shipping Charges:</span> 
          <span className="text-xs sm:text-sm"> {orderItems.length}X$ { parseFloat(moneyMng.shipping_Charge).toFixed(2)} = {moneyMng.shipping_Charge*orderItems.length } </span>
        </div>


 
      </div>
      <p className="flex w-[80%] justify-between"><span className="text-xs font-bold text-neutral-700/90 sm:text-sm">Total:</span> <span className="text-xs font-semibold text-neutral-800/90 sm:text-sm"> $ {Totalmoney}</span></p>

      <button onClick={GoToPay}  className="mt-5 w-[80%] bg-orange-600/80 hover:bg-orange-600/95 active:bg-orange-600/70 p-2 text-xs text-white sm:text-sm text-center" >Proceed To Payment</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default ConfirmOrder
