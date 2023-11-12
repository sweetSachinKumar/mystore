import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneProduct, fetchCTGRiProductarr, arrengedProducts } from '../slices/productApis'
import Banner from '../component/Banner'
import SlideToSlick from '../component/SlideProducts'
import { setTokenId } from '../slices/AuthSlice'
import Loading from '../component/Loading'
import MyError from '../component/MyError'


const Home = () => {
  const dispatch = useDispatch()
  const mainProduct = useSelector(state => state.myProduct.arrengedProduct)
  const myproductStatus = useSelector(state => state.myProduct)

  console.log(myproductStatus)
  useEffect(() => {
    dispatch(fetchOneProduct())
    dispatch(fetchCTGRiProductarr())
    dispatch(arrengedProducts())
    dispatch(setTokenId())
  }, [])

  return (
    <div>
      <Banner />

     
      
      <div className='pt-8 pb-28 min-h-[55vh]'>
 
 {myproductStatus.loading ? <Loading/> :
 
 
 myproductStatus.error ? <MyError/> :
     (   
      <>
      <SlideToSlick  mensProduct={ mainProduct?.mensProduct} title="Products for mens" />
      
      
      <SlideToSlick  mensProduct={ mainProduct?.womensProduct}  title="Products for Womens"/>
      
      
      <SlideToSlick  mensProduct={ mainProduct?.techProduct}  title="Tech Products " />
      
      
      <SlideToSlick  mensProduct={ mainProduct?.otherProduct}  title="Home Products " />
      </>

     )
    }
</div>
    </div>


  )
}

export default Home
