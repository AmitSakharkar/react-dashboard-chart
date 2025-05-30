import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'John Doe',
  avatar: 'https://i.pravatar.cc/300',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      return { ...state, ...action.payload }
    },
  },
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer
