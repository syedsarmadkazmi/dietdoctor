import { createSlice } from "@reduxjs/toolkit"

const recipesSlice = createSlice({
	name: "recipes",
	initialState: {
		tags: [],
		searchKeyword: "",
		isLoading: false,
	},
	reducers: {
		updateTags: (state, action) => {
			state.tags = action.payload
		},
		toggleLoader: (state) => {
			state.isLoading = !state.isLoading
		},
		updateSearchKeyword: (state, action) => {
			state.searchKeyword = action.payload.keyword
		},
	}
})

export const updateTags = recipesSlice.actions.updateTags
export const toggleLoader = recipesSlice.actions.toggleLoader
export const updateSearchKeyword = recipesSlice.actions.updateSearchKeyword

export default recipesSlice.reducer