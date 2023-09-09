import { configureStore } from "@reduxjs/toolkit"

import recipesReducer from "./recipes"

export const store = configureStore({
	reducer: {
		recipes: recipesReducer
	}
})