import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './features/cart/cartSlice';


const store = configureStore({
	reducer: {
		// cart: cartReducer,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(api.middleware),
	// eslint-disable-next-line no-undef
	devTools: process.env.NODE_ENV === "production",
});

export const { dispatch } = store;


export default store;