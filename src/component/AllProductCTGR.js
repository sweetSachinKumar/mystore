import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCTGRiProductarr, fetchProductByQuery } from '../slices/productApis'
import SideBar from './SideBar'
import Product from './Product'
import Loading from './Loading'
import MyError from './MyError'
const AllProductCTGR = () => {

  let [myQuery, setMyQuery] = useState("laptops")

  const dispatch = useDispatch()
  const allProduct = useSelector(state => state.myProduct.allCategoryarr)
  const queryProduct = useSelector(state => state.myProduct.productsQuery?.mydata)
  const myproductStatus = useSelector(state => state.myProduct)

  
  useEffect(() => {
    dispatch(fetchProductByQuery(myQuery))
  }, [myQuery])

  useEffect(() => {
    dispatch(fetchCTGRiProductarr())
  }, [])
  return (
    <>

    <div className='flex flex-col gap-5 lg:flex-row min-h-[80vh] h-full'>

      <div>

        <div className='flex gap-2 md:gap-6 container mx-auto flex-wrap pt-24 lg:hidden'>
          {queryProduct &&
            allProduct?.map((tag, i) => <span className={` cursor-pointer  px-3 rounded-sm text-xl capitalize active:text-orange-800/70 ${queryProduct && queryProduct[0]?.category === tag ? "bg-neutral-800 hover:bg-neutral-900/80 text-slate-100" : "border border-neutral-800 text-neutral-800 "}`} onClick={() => setMyQuery(tag)} key={i}>{tag}</span>)
          }
        </div>

        <div className='lg:block gap-2 md:gap-6 container mx-auto flex-wrap pt-20 hidden'>
      { queryProduct &&  <SideBar setMyQuery={setMyQuery} allProduct={allProduct} queryProduct={queryProduct} />}
          
        </div>
      </div>


      {
        myproductStatus.error ? <div> <MyError/> </div>:
          // all products are here 
          <section className='pt-24 px-2 container mx-auto'>
            <div className='flex justify-between items-center'>
              <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 inline-block lg:hidden '>all Product get from above tags</h2>
              <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 hidden  lg:inline-block'>all Product get from sidebar tags</h2>
            </div>
            {myproductStatus.loading ? <Loading/>
              :
              <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 gap-8'>
                {queryProduct && queryProduct?.map(product => <Product product={product} />)}
              </div>
            }
          </section>
      }





    </div>
    </>
  )
}

export default AllProductCTGR
