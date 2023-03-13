// import { createAction } from '@reduxjs/toolkit'
import {APIs} from '../../api/apis'
import { updateMenu, updateIngredients } from './reducer'
const menuAPI = new APIs('menuitem')
const ingredientAPI = new APIs('ingredient')
const categoryAPI = new APIs('category')


// export const updateMenu = createAction('update_menu')

export const getMenuItems = () => async (dispatch, getState) => {

}
export const getMenuItemsByType = () => async (dispatch, getState) => {

}
export const getIngredients = () => async (dispatch, getState) => {
    let re = await ingredientAPI.fetch()
	let ingredients = []
	re.map((i) => {
		let j = {name: i.name, _id: i._id}
		ingredients.push(j)
	})
	// console.log(ingredients)
	dispatch(updateIngredients, ingredients)

}