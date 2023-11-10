import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllProduct } from '../slices/productApis'
import { adminOrder } from '../component/order/orderSlice'
import { getallUser } from '../slices/AuthSlice'

const AdminDs = () => {

  const mainProduct = useSelector(state => state.myProduct.Allproducts)
console.log(mainProduct.DataLength)
const allData = useSelector(state =>  state.orderData?.fetchOrder)
const userData = useSelector(state => state.auth.allUserData)

console.log(
  )
    
const dispatch = useDispatch()

useEffect(() => {
  dispatch(adminOrder())
  dispatch(getallUser())

  dispatch(fetchAllProduct())

}, [])


  return (
    <>
      <div class="flex flex-col md:flex-row my-9 gap-6  items-center justify-around ">
        <Link to="/products" class="flex h-36 w-36 items-center justify-center rounded-full border-8 border-orange-600/90 bg-orange-400/75">
          <p class="flex flex-col items-center text-neutral-800/80 justify-center gap-1 text-sm font-semibold"> <span>All Products</span> <span>{mainProduct?.DataLength}</span></p>
        </Link>
        <Link to="/orders" class="flex h-36 w-36 items-center justify-center rounded-full border-8 border-orange-600/90 bg-orange-400/75">
          <p class="flex flex-col items-center text-neutral-800/80 justify-center gap-1 text-sm font-semibold"> <span>All Orders</span> <span>{allData?.allorders?.length} </span></p>
        </Link>
        <Link to="/allusers" class="flex h-36 w-36 items-center justify-center rounded-full border-8 border-orange-600/90 bg-orange-400/75">
          <p class="flex flex-col items-center text-neutral-800/80 justify-center gap-1 text-sm font-semibold"> <span>All Users</span> <span>{userData?.dataLength}</span></p>
        </Link>

      </div>

    </>
  )
}

export default AdminDs
