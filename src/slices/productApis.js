import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"


const initialState = {
    allCategoryarr: [],
    arrengedProduct: [],
    singleProduct: {},
    products:{},
    productsQuery:{},
    Allproducts:[]
}

export const fetchOneProduct = createAsyncThunk(
    'products/oneProduct',
    async (id)=> {
        let data = await fetch(`http://localhost:4000/product/getProduct/${id}`)
        let fetchData = await data.json()
        return fetchData
    }
)

export const removeProduct = createAsyncThunk(
    'products/removeProduct',
    async (id)=> {
        let data = await fetch(`http://localhost:4000/product/removeproduct/${id}`)
        let fetchData = await data.json()
        return fetchData
    }
)

export const fetchOneCTGProduct = createAsyncThunk(
    'products/oneCategoryProduct',
    async ({category})=> {
        let data = await fetch(`http://localhost:4000/product/?${category}`)
        let fetchData = await data.json()

        return fetchData
    }
)
export const fetchAllProduct = createAsyncThunk(
    'products/fetchAllProduct',
    async (page)=> {
        let data = await fetch(`http://localhost:4000/product/fetchAllProduct?page=${page}`)
        let fetchData = await data.json()

        return fetchData
    }
)





export const fetchCTGRiProductarr = createAsyncThunk(
    'products/categoryArr',
    async ()=> {
        let data = await fetch("http://localhost:4000/product/category")
        let getCategory = await data.json()

        return getCategory
    }
)
export const arrengedProducts = createAsyncThunk(
    'products/arrengedProducts',
    async ()=> {
        let data = await fetch("http://localhost:4000/product/getCategory")
        let arrengedProduct = await data.json()

        return arrengedProduct
    }
)

export const fetchProductByQuery = createAsyncThunk(
    'products/fetchProductByquery',
    async (category) => {
        let mydata = await fetch(`http://localhost:4000/product/?category=${category}&sort=price`)
        let mainDatas = await mydata.json()

        return mainDatas
    }
)

export const productApis = createSlice({
    name:"products",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchOneProduct.pending, (state, action)=> {
            state.loading = true
        })
        .addCase(fetchOneProduct.fulfilled, (state, action)=> {
            state.loading = false
            state.error = false
            state.singleProduct = action.payload.myProduct

        })
        .addCase(fetchOneProduct.rejected, (state, action)=> { 
            state.error = action.error.message
            state.loading = false

        })
        .addCase(fetchOneCTGProduct.pending, (state, action)=> {
            state.loading = true
        })
        .addCase(fetchOneCTGProduct.fulfilled, (state, action)=> {
            state.loading = false
            state.error = false
            state.products = action.payload.myProduct

        })
        .addCase(fetchAllProduct.pending, (state, action)=> {
            state.loading = true
        })
        .addCase(fetchAllProduct.fulfilled, (state, action)=> {
            state.loading = false
            state.error = false
            state.Allproducts = action.payload

        })
        .addCase(fetchOneCTGProduct.rejected, (state, action)=> { 
            state.error = action.error.message
            state.loading = false

        })




        .addCase(fetchCTGRiProductarr.fulfilled, (state, action)=> {
            state.allCategoryarr = action.payload
        })
        .addCase(arrengedProducts.fulfilled, (state, action)=> {
            state.arrengedProduct = action.payload.myProductCategory

        })
        .addCase(arrengedProducts.pending, (state, action)=> {
            state.loading = true

        })
        .addCase(arrengedProducts.rejected, (state, action)=> {
            state.error = action.error.message

        }).addCase(fetchProductByQuery.fulfilled, (state, action)=> {
            state.productsQuery = action.payload
            state.loading = false
            state.error = false
        })
        .addCase(fetchProductByQuery.pending, (state, action)=> {
            state.loading = true
            state.error = false
        })
        .addCase(fetchProductByQuery.rejected, (state, action)=> {
            state.error = action.error.message
            state.loading = false
        })
        .addCase(removeProduct.fulfilled, (state, action)=> {
          toast.success("product deleted ")
        })
       
    }
})

export const {} = productApis.actions

export default productApis.reducer