import cartApi from "../slices/cartSlice";
import productApis from "../slices/productApis";
import authentication from "../slices/AuthSlice";
import authApi from "../slices/AuthApis";
import orderSlice from "../component/order/orderSlice";


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
        orderData: orderSlice  ,
        [cartApi.reducerPath]: cartApi.reducer,
        myProduct: productApis,
        auth: authentication,
        [authApi.reducerPath]: authApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware, authApi.middleware)
})

export default store
