import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchAllProduct } from '../slices/productApis'

const AllProduct = () => {
  const dispatch = useDispatch()
  const mainProduct = useSelector(state => state.myProduct.Allproducts)
  const [page, setPage] = useState(1)


  let allLengthDT = Math.ceil(mainProduct?.DataLength/18)

  let arrNumb = [] ;
  
  for(let i = 1; i<=allLengthDT; i++) {
    arrNumb.push(i)
  }
  console.log(arrNumb)


  useEffect(() => {
    dispatch(fetchAllProduct())

  }, [])


  useEffect(() => {
    dispatch(fetchAllProduct(page))

  }, [page])






  return (
    <div className='py-12 mb-32 overflow-auto   sm:w-full w-full min-w-min5'>
      <h3 className="uppercase text-center py-5 text-xl md:text-2xl font-semibold text-neutral-800/90">All Products</h3>
      <table className="w-full text-xs sm:text-sm lg:text-base min-w-[500px]">
        <thead>
          <tr className="grid grid-cols-12 p-1 bg-orange-600/80 gap-2 text-white">
            <th className="col-span-3 text-left ">Product Id</th>
            <th className="col-span-5 text-left ">Name</th>
            <th className="col-span-2  pe-1">Category</th>
            <th className="col-span-1  text-right">rating</th>
            <th className="col-span-1   text-right">Price</th>
          </tr>
        </thead>
        <tbody className="">

          {
            mainProduct?.mydata?.map(item => <tr className="grid gap-2 grid-cols-12 p-1 even:bg-gray-500/10 odd:bg-transparent">
                  <td className="col-span-3 text-left break-words">{item._id}</td>
                  <td className="col-span-5 text-left">{item.title}</td>
                  <td className="col-span-2  pe-1 text-center">{item.category}</td>
                  <td className="col-span-1   text-right">{item.rating}</td>
                  <td className="col-span-1  text-right">${item.price}</td>
                </tr>

            
            )
          }

        


        </tbody>
      </table>
<div className='border-4  h-24 w-full mt-4 flex items-center p-4 text-xs sm:text-sm font-semibold   text-right'>
  <span>Page no: </span>
  {
    arrNumb.map(num => <span onClick={()=> setPage(num)} className={`${page===num ? "text-orange-700": "text-gray-800"} hover:text-orange-500/80 cursor-pointer p-3`} >{num}</span>)
  }
</div>
    </div>
  )
}

export default AllProduct
