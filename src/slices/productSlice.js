
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "product",
baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
endpoints: (builder)=> ({
    getAllProduct: builder.query({
        query: ()=> 'product',
        providesTags: ['product']
    }),
    getAllCategoriesedProduct: builder.query({
        query: ()=>({
            url: 'product/category',
            providesTags:['categoriesedProduct']

        })
    }),
    getAllSelectedProduct: builder.query({
        query: (category)=>({
            url: `product/getCategory?${category}`,
            providesTags:['SelectedProduct']

        })
    }),
})
})




export const {useGetAllProductQuery, useGetAllCategoriesedProductQuery, useGetAllSelectedProductQuery} = productApi