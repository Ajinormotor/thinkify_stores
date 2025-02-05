import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Carts.js'

const rootReducer = {
    cart: cartReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;