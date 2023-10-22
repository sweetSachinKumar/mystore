import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchOneProduct, fetchProductByQuery } from '../slices/productApis'
import { useAddToCartMutation } from '../slices/cartSlice'

import defatIMG from '../img/S.png'
import Product from './Product'

const ProductDetail = () => {
    const queryProduct = useSelector(state => state.myProduct.productsQuery?.mydata)

    const [addToCart] = useAddToCartMutation()
    const { id: urlId } = useParams()


    const dispatch = useDispatch()
    const myProducts = useSelector(state => state.myProduct.singleProduct)
    const myproductStatus = useSelector(state => state.myProduct)
    const myQuery = myProducts?.category

    useEffect(() => {
        dispatch(fetchOneProduct(urlId))
    }, [])

    useEffect(() => {
        dispatch(fetchProductByQuery(myQuery))
      }, [myQuery])

    return (
        <>
            <Link to="/" className='bg-slate-800 hover:bg-slate-800/70 active:bg-slate-800/90 text-white px-4 py-1 text-xl absolute top-24 left-6 rounded'> &larr;  go to home </Link>
            <Link to="/gotocart" className='bg-slate-800 hover:bg-slate-800/70 active:bg-slate-800/90 text-white px-4 py-1 text-xl absolute top-24 right-6 rounded'>   go to cart &rarr;</Link>
            {myproductStatus.loading && <h2>Loading...</h2>}
            {myproductStatus.error && <h2>{myproductStatus.error}</h2>}
            {
                myProducts &&

                <section className='h-screen pt-32 pb-12 lg:py-32 flex items-center' key={myProducts._id}>
                    <div className='container mx-auto'>

                        <div className='flex flex-col lg:flex-row items-center' key={myProducts._id+"sachin"}>
                            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>

                                <img src={myProducts.thumbnail
                                    ? myProducts.thumbnail : defatIMG} alt={myProducts.title} className='max-w-[200px] lg:max-w-sm ' />
                            </div>

                            <div className="flex-1 text-center lg:text-left">
                                <h1 className='text-[26px] font-medium mb-2 max-w-[460] lg:mx-0 mx-auto'>{myProducts.title ? myProducts.title : "[no data]"}</h1>
                                <div className='text-xl text-red-500 font-medium mb-6 '> $ {myProducts.price ? myProducts.price : "[no data]"} </div>
                                <p className='mb-8'>{myProducts.description ? myProducts.description : "[no data]"}</p>
                                <button onClick={() => addToCart(myProducts)} className='bg-black py-4 rounded px-8 text-white font-bold text-xs md:text-base leading-relaxed tracking-wide hover:bg-black/70 active:bg-black/50'>Add to cart</button>
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



        </>
    )
}

export default ProductDetail
