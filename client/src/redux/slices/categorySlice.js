import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import categoryAPI from '../../api/categoryApi'

export const getAllCategory = createAsyncThunk(
	'category/getAllCategory',
	async (_, { rejectWithValue }) => {
		try {
			return await categoryAPI.getAllCategory()
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const getCategory = createAsyncThunk(
	'category/getCategory',
	async (id, { rejectWithValue }) => {
		try {
			return await categoryAPI.getCategory(id)
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const addCategory = createAsyncThunk(
	'category/addCategory',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const result = await categoryAPI.addCategory(data)

			dispatch(getAllCategory())

			return result
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const updateCategory = createAsyncThunk(
	'category/updateCategory',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const result = await categoryAPI.updateCategory(data)

			dispatch(getAllCategory())

			return result
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const deleteCategory = createAsyncThunk(
	'category/deleteCategory',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			const result = await categoryAPI.deleteCategory(id)

			dispatch(getAllCategory())

			return result
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

const initialState = {
	categories: [],
	categoriesLoading: false,
	category: {},
	categoryLoading: false,
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllCategory.pending]: (state) => {
			state.categoriesLoading = true
		},
		[getAllCategory.fulfilled]: (state, action) => {
			state.categoriesLoading = false
			state.categories = action.payload.categories
		},
	},
})

export default categorySlice.reducer
