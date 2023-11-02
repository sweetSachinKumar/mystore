import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {} from "@reduxjs/toolkit/query/react"

const initialState = {
    authToken: ``,
    user: {},
    isUser:false
}

export const createUser = createAsyncThunk(
    'auth/createuser',
    async (user)=> {
        const {name, email, password} = user
        const mytoken = await fetch("http://localhost:4000/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        
        let data = await mytoken.json()
        return data
    }
)




export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user)=> {
        const {password, email} = user
        const mytoken = await fetch("http://localhost:4000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({password, email})
        })
        
        let data = await mytoken.json()
        return data
    }
)

export const getaUserData = createAsyncThunk(
    'auth/getaUserData',
    async () => {
        const userData = await fetch("http://localhost:4000/auth/getaUser", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                'auth-token': localStorage.getItem('token')
            }
        })
        let userInfo = await userData.json()
        return userInfo
    }
)



 const authentication = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setTokenId: (state)=>{
            if(!state.authToken){
                if( localStorage.getItem('token') !== null){
                    state.authToken = localStorage.getItem('token')
                    state.isUser = true
                }else{
                    state.isUser = false
                }
            }else {
                if(state.isUser){
                    state.isUser = true
                }
            }
        
        },
        logOutbtn: (state)=> {
            if(localStorage.getItem('token') !== null && state.isUser){
                localStorage.removeItem('token')
                state.isUser = false
                state.authToken = ""
            }
          
        }
    },
    extraReducers: (builder)=> {
        builder
        .addCase(createUser.fulfilled, (state, action)=> {
            if(action.payload.authtoken)  localStorage.setItem('token', action.payload.authtoken)
            if(action.payload.success) state.isUser = action.payload.success 
         
        })
        .addCase(loginUser.fulfilled, (state, action)=> {
            console.log(action.payload)
            if(action.payload.error) console.log(action.payload.error)
            // if(action.payload.authtoken) state.authToken = action.payload.authtoken
            if(action.payload.authtoken)  localStorage.setItem('token', action.payload.authtoken)
            if(action.payload.success) state.isUser = action.payload.success 
         
        })
        .addCase(getaUserData.fulfilled, (state,action)=>{
            if(action.payload.error) console.log(action.payload.error)
            if(action.payload.success) state.isUser = action.payload.success 
            console.log(action.payload)
            if(action.payload.user) state.user = action.payload.user

        })
    }
})

export const {setTokenId, logOutbtn} = authentication.actions

export default authentication.reducer
