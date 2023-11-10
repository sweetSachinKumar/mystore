import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getaordersinfo, updateOrder } from '../component/order/orderSlice'
import { useParams } from 'react-router-dom'
import SuborderItem from '../component/order/SuborderItem'

const OrderDetails = () => {


  const dispatch = useDispatch()
  const {id:urlId} = useParams()
  const statusOr = useRef("processing")
  const dataInfo = useSelector(state =>  state.orderData?.orderInfo)


let arrdata =  {...dataInfo?.getorder}
arrdata["name"] = arrdata["username"]



const handleStatus = (id)=> {
  // orderStatus
  dispatch(updateOrder({id,orderStatus:statusOr.current.value }))

}


  useEffect(()=> {
    dispatch(getaordersinfo(urlId))
  },[])
  useEffect(()=> {
    dispatch(getaordersinfo(urlId))
  },[handleStatus])
  return (
    <>
      <div className="grid py-14 md:grid-cols-12  m-3 w-full ">
  <div className="lg:col-span-9  px-7 md:col-span-8 ">
    <div>
      <h3 className="text-xl font-semibold text-gray-800/75 sm:text-2xl">Shipping Info</h3>
      <div className="mx-2 my-2 flex min-h-[75px] flex-col justify-around gap-1  p-1 text-xs text-neutral-800 sm:mx-4 sm:min-h-[100px] sm:text-sm">
        <p><span>Name:</span> <span> {dataInfo?.getorder?.username}</span></p>
        <p><span>Phone:</span> <span> {dataInfo?.getorder?.phone}</span></p>
        <p><span>Address:</span> <span> {dataInfo?.getorder?.address}</span></p>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-800/75 sm:text-2xl">Payment</h3>
      <div className="mx-2 my-2 flex min-h-[75px] flex-col justify-around gap-1 p-1 text-xs text-neutral-800 sm:mx-4 sm:min-h-[100px] sm:text-sm">
       {dataInfo?.getorder?.payment ? <p className='text-green-800/80 font-semibold'>Paid</p>: <p className=' text-gray-700/80 font-semibold'>Pay on delevery</p>} 
        <p><span>Amount:</span> <span> ${dataInfo?.getorder?.price * dataInfo?.getorder?.quantity + dataInfo?.getorder?.shipping}</span></p>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-800/75 sm:text-2xl">Order Status</h3>
      <div className="mx-2 my-2 flex min-h-[75px] flex-col justify-around gap-1 p-1 text-xs text-neutral-800 sm:mx-4 sm:min-h-[100px] sm:text-sm">
        <p>{dataInfo?.getorder?.orderStatus}</p>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-800/75 sm:text-2xl">Your Cart Items:</h3>
      <div className="mx-2 my-2  p-1">
                <SuborderItem item={arrdata} />

              </div>
    </div>
  </div>

  <div className="mt-14 md:mt-0 w-full px-7 md:col-span-4 lg:col-span-3  ">
    <h3 className="text-xl font-semibold text-gray-800/75 sm:text-2xl">Order Status</h3>
    <div className="mx-auto mt-4 flex flex-col space-y-5 px-4 sm:px-0">
    
      <select ref={statusOr}   className=" border px-4 py-1">
        <option  value="processing">Choose Category</option>
        <option value="shipping">Shipping</option>
        <option value="deleverd">Delevered</option>
      </select>

      <button onClick={ ()=> handleStatus(dataInfo?.getorder?._id)} className="border bg-orange-600/90 text-slate-200 hover:bg-orange-600/95 hover:text-slate-100 active:bg-orange-600/70">Process</button>
    </div>
  </div>
</div>

    </>
  )
}

export default OrderDetails
