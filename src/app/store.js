import cartApi from "../slices/cartSlice";
import productApis from "../slices/productApis";
import authentication from "../slices/AuthSlice";


const { configureStore } = require("@reduxjs/toolkit");

// const store = configureStore({
//     reducer:{
//         [cartApi.reducerPath]: cartApi.reducer,
//         myProduct: productApis,
//         myCart: cartApis

//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware)
// })
const store = configureStore({
    reducer:{
        [cartApi.reducerPath]: cartApi.reducer,
        myProduct: productApis,
        auth: authentication

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware)
})

export default store
