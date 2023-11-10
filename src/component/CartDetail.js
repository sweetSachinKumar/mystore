import { useOneCartMutation} from "../slices/cartSlice"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct, fetchProductByQuery } from '../slices/productApis'
import { useAddToCartMutation } from '../slices/cartSlice'

import defatIMG from '../img/S.png'
import Product from './Product'
import { toast } from 'react-toastify'
import Loading from './Loading'
import { CartToOrder, TotalMoney } from "./order/orderSlice"




const CartDetail = () => {
    const {id:urlId} = useParams()
    const [cartItem, results] = useOneCartMutation() 
   

    const queryProduct = useSelector(state => state.myProduct.productsQuery?.mydata)
    // const [myProducts, setMyProducts] = useState()
    const [addToCart, result] = useAddToCartMutation() 
    const {isSuccess, isError, error } = result
    // too much rereding after click on product eye for more information ;::: that's why  alert is off now
useEffect(()=> { 
    if(isSuccess){
        toast.success('added to cart', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      if(isError){
        toast.info(error.data.error, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }

    },[result])

    const navigator = useNavigate()
    const dispatch = useDispatch()
    const myProducts = useSelector(state => state.myProduct.singleProduct)
    const myproductStatus = useSelector(state => state.myProduct)
    const myQuery = results?.data?.getItem?.category
    

    const shopNow = ()=> {
        dispatch(CartToOrder([results?.data?.getItem])) 
        const totalMoney = results?.data?.getItem.price * results?.data?.getItem.quantity
        dispatch(TotalMoney(totalMoney))
        navigator("/shipping")
        
     }
     







    
    useEffect( ()=> {
         cartItem(urlId)
    },[])

    useEffect(() => {
        dispatch(fetchOneProduct(urlId))
    }, [urlId])

    useEffect(() => {
        dispatch(fetchProductByQuery(myQuery))
      }, [myQuery])




  return (
    <div className='min-h-[80vh] h-full'>
    <Link to="/" className='bg-slate-800 hover:bg-slate-800/70 active:bg-slate-800/90 text-white px-4 py-1 text-xl absolute top-24 left-6 rounded'> &larr;  go to home </Link>
    <Link to="/gotocart" className='bg-slate-800 hover:bg-slate-800/70 active:bg-slate-800/90 text-white px-4 py-1 text-xl absolute top-24 right-6 rounded'>   go to cart &rarr;</Link>
    {myproductStatus.loading && <Loading/>}
    {myproductStatus.error && <h2>{myproductStatus.error}</h2>}
    {
        results?.data &&

        <section className='h-screen pt-32 pb-12 lg:py-32 flex items-center' key={results?.data?.getItem._id}>
            <div className='container mx-auto'>

                <div className='flex flex-col lg:flex-row items-center' key={results?.data?.getItem._id+"sachin"}>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>

                        <img src={results?.data?.getItem.thumbnail
                            ? results?.data?.getItem.thumbnail : defatIMG} alt={results?.data?.getItem.title} className='max-w-[200px] lg:max-w-sm ' />
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                        <h1 className='text-[26px] font-medium mb-2 max-w-[460] lg:mx-0 mx-auto'>{results?.data?.getItem.title ? results?.data?.getItem.title : "[no data]"}</h1>
                        <div className='text-xl text-red-500 font-medium mb-6 '> $ {results?.data?.getItem.price ? results?.data?.getItem.price : "[no data]"} </div>
                        <p className='mb-8'>{results?.data?.getItem.description ? results?.data?.getItem.description : "[no data]"}</p>
                        <button onClick={shopNow}  to="/shipping"  className='bg-black py-2 rounded px-6 text-white font-bold text-xs md:text-base leading-relaxed tracking-wide hover:bg-black/70 active:bg-black/50'>Buy Now</button>
                    </div>
                </div>
            </div>

        </section>
    }

 



    {queryProduct &&
        myproductStatus.error ? <strong className='text-red-800 pt-24'> some error occured because of {myproductStatus.error} </strong> :
            // all products are here 
            <section className='pt-24 px-2 container mx-auto'>
                <div className='flex justify-between items-center'>
                    <h2 className='mx-4 pe-6 my-14 text-4xl font-light border-b-2 border-orange-400 inline-block '>some relative Product </h2>
                    
                </div>
                {myproductStatus.loading ? <h3>Loading... </h3>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0 gap-8'>
                        {queryProduct && queryProduct?.map(product => <Product product={product} />)}
                    </div>
                }
            </section>
    }



</div>
  )
}

export default CartDetail
