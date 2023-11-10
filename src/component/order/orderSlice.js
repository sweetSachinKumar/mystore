import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"





const initialState = {
    payment: false,
    shippingData: {},
    orderItems: [],
    TotalMoney:0,
    OrderPrice:0,
    allOrderItems: [],
    fetchOrder:[],
    orderInfo:[],
    userallorders: []
    
}





// add to order 
export const addOrderItem = createAsyncThunk(
    'auth/addOrderItem',
    async (datas)=> {
       
        const mytoken = await fetch("http://localhost:4000/order/addtoorder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({...datas})
        })
        
        let data = await mytoken.json()
        return data
    }
)



export const getorders = "sachin"
// view all order  for admin
export const adminOrder = createAsyncThunk(
    'auth/adminOrder',
    async (datas)=> {
       
        const orders = await fetch("http://localhost:4000/order/allorders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({...datas})
        })
        
        let data = await orders.json()
        return data
    }
)


// view all order  for admin
export const userOrders = createAsyncThunk(
    'auth/userOrders',
    async (datas)=> {
       
        const orders = await fetch("http://localhost:4000/order/allordersuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({...datas})
        })
        
        let data = await orders.json()
        return data
    }
)








// one order info for admin 
export const getaordersinfo = createAsyncThunk(
    'auth/getaordersinfo',
    async (id)=> {
       
        const orders = await fetch(`http://localhost:4000/order/getaOrder/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
           
        })
        
        let data = await orders.json()
        return data
    }
)



// update order
export const updateOrder = createAsyncThunk(
    'auth/updateOrder',
    async ({id,orderStatus})=> {
       
        const orders = await fetch(`http://localhost:4000/order/updateorder/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
           body: JSON.stringify({orderStatus})
        })
        
        let data = await orders.json()
        return data
    }
)














 const orderSlice = createSlice({
    name:"orderforuser",
    initialState,
    reducers: {
        addtoShipping: (state, action) => {
            state.shippingData = action.payload
        },
        payments: (state, action)=> {
            state.payment = action.payload
        },
        CartToOrder: (state, action) => {
            state.orderItems = action.payload
        },
        
        TotalMoney: (state, action) => {
            state.TotalMoney = action.payload
        },
        orderPrice: (state, action) => {
            state.OrderPrice = action.payload
        },
        allOrderItems: (state, action) => {
            state.allOrderItems = action.payload
        }
        

    },
    extraReducers: (builder) => {
        builder
        .addCase(addOrderItem.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        .addCase(adminOrder.fulfilled, (state, action) => {
              state.fetchOrder = action.payload
        })
        .addCase(getaordersinfo.fulfilled, (state, action) => {
              state.orderInfo = action.payload
        })
        .addCase(updateOrder.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        .addCase(userOrders.fulfilled, (state, action) => {
              state.userallorders = action.payload
        })
      
    }
})

export const {addtoShipping, payments, CartToOrder, TotalMoney,orderPrice, allOrderItems} = orderSlice.actions

export default orderSlice.reducer
