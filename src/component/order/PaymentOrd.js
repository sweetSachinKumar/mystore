import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addOrderItem } from './orderSlice'
import {MdLocalShipping}  from 'react-icons/md'
import {BiCartDownload}  from 'react-icons/bi'
import {RiBankFill}  from 'react-icons/ri'
import {SiPaytm}  from 'react-icons/si'
import {GiTakeMyMoney}  from 'react-icons/gi'


const PaymentOrd = () => {
  const dispatch = useDispatch()
  const [selectBox, setSelectBox] = useState(2)
  const [pay, setPay ] = useState("Pay on delevery")
  const totalMoney = useSelector(state => state.orderData?.TotalMoney)
  const allOrderItems = useSelector(state => state.orderData?.allOrderItems)
  const navigator = useNavigate()

  
const ptm = () => {
  setPay("paid")
   setSelectBox(1)
}
const noptm = () => {
  setPay("Pay on delevery")
   setSelectBox(2)
}


const Orderofitems = allOrderItems.map(order=> ({...order, payment:pay}))
const handleOrder = () => {
  for(let Orderofitem of Orderofitems){
    dispatch(addOrderItem(Orderofitem))
    console.log(Orderofitem)

  }
  navigator("/successorder")
}

// console.log(Orderofitems)
  return (
    <div className='mt-28  px-6 mb-56'>
      <div className="container mx-auto px-8 sm:px-0">
        <div className="flex h-[15vh] items-center justify-center">
          <div className="relative mx-auto flex sm:w-[89%] w-full items-center justify-between">

            <div className="relative bg-white p-3">
              <span className="text-xl text-orange-700 md:text-2xl"> <MdLocalShipping/></span>
              <p className="absolute -left-4 top-12 w-32 text-xs font-semibold text-neutral-700">shipping Detail</p>
            </div>

            <div className="relative bg-white p-3">
              <span className="text-xl text-orange-700 md:text-2xl"> <BiCartDownload/> </span>
              <p className="absolute -left-4 top-12 w-32 text-xs font-semibold text-neutral-700">Confirm Order</p>
            </div>

            <div className="relative bg-white p-3">
              <span className="text-xl text-orange-700  md:text-2xl"> <RiBankFill/> </span>
              <p className="absolute -left-4 top-12 w-32 text-xs font-semibold text-neutral-700">Payment</p>
            </div>

            <div className="absolute -z-10 h-[2px] w-full bg-slate-400">
              <div className="h-full w-[100%] bg-orange-400/75"></div>
            </div>
          </div>
        </div>


        <div className="mt-14 flex items-center flex-col gap-5 justify-center ">
          <h3 className="sm:text-3xl text-2xl text-center border-b-2 px-7 pb-3 ">Card Info</h3>


          <div className=" space-y-3 w-full max-w-xs">
            <div onClick={ptm} className={`border p-3 hover:bg-orange-500/10 flex cursor-pointer ${selectBox===1? "bg-orange-500/10": ""}`}>
              <span className="pe-5 text-xl md:text-2xl"><SiPaytm /></span> <span className="text-sm font-semibold text-neutral-700">pay through Paytm</span>
            </div>


            <div onClick={noptm} className={`border p-3 hover:bg-orange-500/10 cursor-pointer flex items-center ${selectBox===2? "bg-orange-500/10": ""}`} >
              <span className="pe-5"><GiTakeMyMoney/></span> <span className="text-sm font-semibold  text-neutral-700">pay on develery</span>
            </div>


            <div className=" flex items-center justify-center ">
              <button onClick={handleOrder}  className="bg-orange-600/80 hover:bg-orange-600/95 active:bg-orange-600/70 mt-4 text-xs sm:text-sm font-semibold text-gray-200 py-2 w-full text-center"> pay ${totalMoney} </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PaymentOrd
