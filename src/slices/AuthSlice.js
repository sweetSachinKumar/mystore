import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    authToken: localStorage.getItem('token'),
    user: {},
    isUser:false,
    allUserData:[],
    vender:false
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


export const removeUser = createAsyncThunk(
    'auth/removeUser',
    async (id)=> {
       
        const mytoken = await fetch(`http://localhost:4000/auth/removeuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            
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


export const getallUser = createAsyncThunk(
    'auth/getallUser',
    async (page) => {
        const userData = await fetch(`http://localhost:4000/auth/getalluser?page=${page}`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                
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
            if(!state.authToken && !state.vernder){
                if( localStorage.getItem('token') !== null){
                    state.authToken = localStorage.getItem('token')
                    state.isUser = true
                }else{
                    state.isUser = false
                }
            }else {
                if(state.isUser){
                    state.isUser = false
                    state.vender = false
                }
            }
        
        },
        setVender: (state, action) => {
            state.vender = true
            state.isUser = false
        },
        removeVender: (state, action) => {
            state.vender = false
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
            if(action.payload.error) console.log(action.payload.error)
            // if(action.payload.authtoken) state.authToken = action.payload.authtoken
            if(action.payload.authtoken)  localStorage.setItem('token', action.payload.authtoken)
            if(action.payload.success) state.isUser = action.payload.success 
         
        })
        .addCase(getaUserData.fulfilled, (state,action)=>{
            if(action.payload.error) console.log(action.payload.error)
            if(action.payload.success) state.isUser = action.payload.success 
            if(action.payload.user) state.user = action.payload.user

        })
        .addCase(getallUser.fulfilled, (state,action)=>{
            if(action.payload.error) console.log(action.payload.error)
            if(action.payload.success) state.isUser = action.payload.success 
            state.allUserData = action.payload

        })
        .addCase(removeUser.fulfilled, (state,action)=>{
            toast.success('user is removed ', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

        })
    }
})

export const {setTokenId, logOutbtn, setVender, removeVender} = authentication.actions

export default authentication.reducer
