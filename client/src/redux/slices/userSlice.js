import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI from '../../api/userApi'

export const getAllUser = createAsyncThunk(
	'user/getAllUser',
	async (_, { rejectWithValue }) => {
		try {
			return await userAPI.getAllUser()
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const getUser = createAsyncThunk(
	'user/getUser',
	async (id, { rejectWithValue }) => {
		try {
			const result = await userAPI.getUser(id)
			console.log(result)
			return result
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const addUser = createAsyncThunk(
	'user/addUser',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const result = await userAPI.addUser(data)

			dispatch(getAllUser())

			return result
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const updateUser = createAsyncThunk(
	'user/updateUser',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const result = await userAPI.updateUser(data)

			dispatch(getUser(data._id))

			return result
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const deleteUser = createAsyncThunk(
	'user/deleteUser',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			const result = await userAPI.deleteUser(id)

			dispatch(getAllUser())

			return result
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

const initialState = {
	users: [],
	usersLoading: false,
	user: {},
	userLoading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllUser.pending]: (state) => {
			state.usersLoading = true
		},
		[getAllUser.fulfilled]: (state, action) => {
			state.usersLoading = false
			state.users = action.payload.users
		},
		// [getUser.pending]: (state) => {
		// 	state.usersLoading = true
		// },
		[getUser.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.user = action.payload.user
		},

		[updateUser.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.user = action.payload.user
		},
	},
})

export default userSlice.reducer
