// import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducers';

// export default function configureStore(initialState) {
// 	const store = createStore(reducer, initialState, compose(
// 		applyMiddleware(thunkMiddleware),
// 		typeof window.devToolsExtension === 'function' ? window.devToolsExtension() : f => f
// 	));
// 	return store;
// }
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import foodReducer from './Food/reducer'

const reducer = combineReducers({
	// Home: homeReducer,
	// Place: placeReducer,
	Food: foodReducer
	// User: userReducer
})

const store = configureStore({
    reducer,
  })

export default store;
