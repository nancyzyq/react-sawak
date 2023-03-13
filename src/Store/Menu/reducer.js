// import { createReducer } from '@reduxjs/toolkit'
// import { updateMenu } from './action'
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: [],
        menuItemToEdit: {},
        ingredients: [],
        categories: []
    },
    reducers: {
        updateMenu: (state, action) => {
            state.menu = action.payload
        },
        updateIngredients: (state, action) => {
            state.ingredients = action.payload
        }
    }

})

// let initState = {
//     menu: [],
//     itemToEdit: {},
//     ingredients: [],
//     categories: []
// }


// const menuReducer = createReducer(
//     initState,
//     (builder) => {
//         builder.addCase(updateMenu, (state, action) => {
//             state.menu = action.payload
//         })
//     }
// )

// export default menuReducer
export const { updateMenu, updateIngredients } = menuSlice.actions
export default menuSlice.reducer