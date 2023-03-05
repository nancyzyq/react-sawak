import { createReducer } from '@reduxjs/toolkit'
import { updateFood } from './action'

let initState = {
    food: [],
    foodToEdit: {},
    ingredients: [],
    categories: [],
    menu: []
}


const foodReducer = createReducer(
    initState,
    (builder) => {
        builder.addCase(updateFood, (state, action) => {
            state.food = action.payload
        })
    }
)

export default foodReducer