import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userOrders } from './orderSlice'
const AllOrder = () => {

    // const AllItems = useSelector(state => state.orderData?.orderItems)
    const userallorders = useSelector(state => state.orderData?.userallorders)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(userOrders())
    },[])

    return (
        <div className='py-16 mb-32 overflow-auto  w-screen sm:w-full'>
            <h3 className="uppercase text-center py-5 text-xl md:text-2xl font-semibold text-neutral-800/90">All Orders</h3>
            <table className="w-full text-xs sm:text-sm lg:text-base min-h-[80vh] h-full min-w-[400px]  ">
                <thead>
                    <tr className="grid grid-cols-12  gap-3 bg-orange-600/80 text-white p-1">
                        <th className="col-span-3  text-left ps-3">order Id</th>
                        <th className="col-span-4  text-left ps-3">Product Name</th>
                        <th className="col-span-2  text-left">status</th>
                        <th className="col-span-1  text-right">Item Qty</th>
                        <th className="col-span-2  text-right pr-3">Amount</th>
                    </tr>
                </thead>
                <tbody>

                    {  userallorders?.allorders &&
                    
                    userallorders?.allorders?.map(order=>{
                        return (

                            
                    <tr className="grid grid-cols-12 gap-3 even:bg-gray-500/10 odd:bg-transparent p-1">
                        <td className="col-span-3  text-left ps-3">{order._id}</td>
                        <td className="col-span-4  text-left ps-3">{order.title}</td>
                        <td className="col-span-2  text-left">{order.orderStatus}</td>
                        <td className="col-span-1  text-right">{order.quantity}</td>
                        <td className="col-span-2  text-right pe-3">${order.price * order.quantity}</td>
                    </tr>
                    
                
                    )
                })
                }
                  

                </tbody>
            </table>

        </div>
    )
}

export default AllOrder
