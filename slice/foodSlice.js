import { createSlice } from '@reduxjs/toolkit'
import { foodsclass } from '../constant'

const initialState = {
  food: [],
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFood: (state, action) => {
      state.food = foodsclass;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFood } = foodSlice.actions

export const selectFood = state => state.food.food;

export default foodSlice.reducer