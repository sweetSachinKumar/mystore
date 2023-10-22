import React, { useEffect } from 'react'
import Product from '../component/Product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneProduct, fetchCTGRiProductarr, arrengedProducts } from '../slices/productApis'
import Banner from '../component/Banner'


const Home = () => {
  const dispatch = useDispatch()
  const allCategory = useSelector(state => state.myProduct.allCategory)
  const mainProduct = useSelector(state => state.myProduct.arrengedProduct)
  const myproductStatus = useSelector(state => state.myProduct)
  console.log(mainProduct)

  

    

useEffect(()=> {
   dispatch(fetchOneProduct())
  dispatch(fetchCTGRiProductarr())
  dispatch(arrengedProducts())
},[])

  return (
    <div>
      <Banner/>

      {/* <button onClick={()=> dispatch(fetchAllProduct())}>click</button> */}
       <div className='container flex gap-3  flex-wrap mx-auto my-12'>
        {allCategory &&
          allCategory?.map(catg =><span className='text-xl text-white px-2 py-1 bg-black'>{catg}</span> )
        }
        
      </div>

      {
        myproductStatus.error? <strong>some error occured beacuse of {myproductStatus.error} </strong> :
      
<>

 {/* for mens  */}
      <section className='py-6 px-2 container mx-auto'>
      <div className='flex justify-between items-center'>
      <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 inline-block'> Products for mens</h2> 
      { myproductStatus.loading
  && <h3>Loading... </h3>
 }
 
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 gap-8'>
      {mainProduct && mainProduct?.mensProduct?.map(product => <Product product={product}/> )}
      </div>
    </section>
  

{/* for womens  */}
      <section className='py-6 px-2 container mx-auto'>
      <div className='flex justify-between items-center'>
      <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 inline-block'> Products for Womens</h2> 
      { myproductStatus.loading
  && <h3>Loading... </h3>
 }
     </div>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 gap-8'>
      {mainProduct && mainProduct?.womensProduct?.map(product => <Product product={product}/> )}
      </div>
    </section>
  

{/* for tech  */}
      <section className='py-6 px-2 container mx-auto'>
      <div className='flex justify-between items-center'>
      <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 inline-block'> Tech Products </h2> 
      { myproductStatus.loading
  && <h3>Loading... </h3>
 }
  
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 gap-8'>
      {mainProduct && mainProduct?.techProduct?.map(product => <Product product={product}/> )}
      </div>
    </section>
  

{/* for others  */}
      <section className='py-6 px-2 container mx-auto'>
      <div className='flex justify-between items-center'>
      <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 inline-block'> Home Products </h2> 
      { myproductStatus.loading
  && <h3>Loading... </h3>
 }
  
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 gap-8'>
      {mainProduct && mainProduct?.otherProduct?.map(product => <Product product={product}/> )}
      </div>
    </section>
  


    </>
}



    </div>
  )
}

export default Home
