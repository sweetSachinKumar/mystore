import cartApi from "../slices/cartSlice";
import productApis from "../slices/productApis";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        [cartApi.reducerPath]: cartApi.reducer,
        myProduct: productApis

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware)
})

export default store
