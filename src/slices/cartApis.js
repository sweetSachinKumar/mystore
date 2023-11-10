import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart: {}
}

export const fetchAllCart = createAsyncThunk(
    'cart/fetchallcart',
    async ()=> {
        const response = await fetch('http://localhost:4000/cart', {
            method: "GET",
            headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
            }
        })
        let data = response.json()

        return data
    }
)

export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async ({id, quantity})=> {
        const response = await fetch(`http://localhost:4000/updatetocart/${id}`, {
            method: "PUT",
            headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzOTlmYWY0ZDUwZWNmYzMwMjI0NDMwIn0sImlhdCI6MTY5ODI3NjcyM30.bMn1fXxfBKpMmY2mV_4pW_QnRjKh72JSzcTqtB9ZwEU"
            },
            body: JSON.stringify({quantity})
        })
        let data = response.json()

        return data
    }
)



export const addCart = createAsyncThunk(
    'cart/addCart',
    async (product)=> {
        const response = await fetch(`http://localhost:4000/cart/addtocart`, {
            method: "POST",
            headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzOTlmYWY0ZDUwZWNmYzMwMjI0NDMwIn0sImlhdCI6MTY5ODI3NjcyM30.bMn1fXxfBKpMmY2mV_4pW_QnRjKh72JSzcTqtB9ZwEU"
            },
            body: JSON.stringify({ ...product, quantity: 1 })
        })
        let data = response.json()

        return data
    }
)







 const cartApi = createSlice({
    name: "cart",
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {
        builder
        .addCase(fetchAllCart.fulfilled, (state, action)=>{
            state.cart = action.payload
        })
        .addCase(fetchAllCart.rejected, (state, action)=>{
            console.log(action.error.message)
        })
        .addCase(updateCart.rejected, (state, action)=>{
            console.log(action.error.message)
        })
        .addCase(updateCart.fulfilled, (state, action)=>{
            console.log(action.payload)
        })
    }
})

// export const { } = cartApi.actions

export default cartApi.reducer