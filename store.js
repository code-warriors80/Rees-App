import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import foodSlice from './slice/foodSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    food: foodSlice
  }
})