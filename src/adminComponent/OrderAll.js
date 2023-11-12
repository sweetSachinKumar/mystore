import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { adminOrder} from '../component/order/orderSlice'

const OrderAll = () => {

const dispatch = useDispatch()
const allData = useSelector(state =>  state.orderData?.fetchOrder)

const allOrders = allData?.allorders?.filter(item => item.orderStatus !== "deleverd"  )

console.log(allOrders)

dispatch(adminOrder())
    
  


  return (
    <div className='py-12 mb-32 overflow-auto   sm:w-full w-full h-full' >
    <h3 className="uppercase text-center py-5 text-xl md:text-2xl font-semibold text-neutral-800/90">All Orders</h3>
    <table className="w-full text-xs sm:text-sm lg:text-base min-h-[80vh] h-full min-w-[400px]  ">
                <thead>
                    <tr className="grid grid-cols-12  gap-3 bg-orange-600/80 text-white p-1">
                        <th className="col-span-3 break-words text-left ps-3">order Id</th>
                        <th className="col-span-3 break-words text-left ps-3">Product name</th>
                        <th className="col-span-2  text-left">status</th>
                        <th className="col-span-2  text-right">Item Qty</th>
                        <th className="col-span-2  text-right pr-3">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData?.allorders &&
                        allOrders?.map(order => {
                            return (
                             <tr className="grid grid-cols-12 gap-3 even:bg-gray-500/10 odd:bg-transparent p-1">
                                <td className="col-span-3 break-words text-left ps-3"><Link to={`/orderdetails/${order._id}`}>{order._id}</Link> </td>
                                <td className="col-span-3 break-words text-left ps-3" > <Link to={`/orderdetails/${order._id}`}>{order.title}</Link></td>
                                <td className="col-span-2 break-words text-left ps-3" > <Link to={`/orderdetails/${order._id}`}>{order.orderStatus} </Link></td>
                                <td className="col-span-2  text-right ">{order.quantity}</td>
                                <td className="col-span-2  text-right pr-3">{order.price*order.quantity + order.shipping }</td>
                            </tr>
                            )
                        })
                    }
                   


                </tbody>
            </table>
    </div>
  )
}

export default OrderAll
