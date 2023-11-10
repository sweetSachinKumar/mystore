import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
    reducerPath: "cart",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/", 
        prepareHeaders: (headers, { getState }) => {
            const token =  getState().auth.authToken || localStorage.getItem('token')
            if (token) {
                headers.set("auth-token", `${token}`)
              }      
            return headers
          },
    }),
    endpoints: (builder) => ({
        getAllCart: builder.query({
            query: () => "/cart",
            
            providesTags: ["cart"]
        }),
       addToCart: builder.mutation({
            query: (product) => ({
                url: 'cart/addtocart',
                method: 'post',
                body: { ...product, quantity: 1 }
            }),
            invalidatesTags: ["cart"]
        }),
        updateCart: builder.mutation({
            query: ({ id, quantity }) => ({
                url: `cart/updatetocart/${id}`,
                method: 'put',
                body: { quantity }
            }),
            invalidatesTags: ["cart"]
        }),
        removeFromCart: builder.mutation({
            query: (id) => ({
                url: `cart/removefromcart/${id}`,
                method: 'delete'
            }),
            invalidatesTags: ["cart"]
        }),
        oneCart: builder.mutation({
            query: (urlId)=> ({
                url: `cart/getCart/${urlId}`,
                method: 'post'
            }),
            invalidatesTags: ["cart"]

        })

    })
})

export const { useGetAllCartQuery, useAddToCartMutation, useRemoveFromCartMutation, useUpdateCartMutation, useOneCartMutation } = cartApi

export default cartApi