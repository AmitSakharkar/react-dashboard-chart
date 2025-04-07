import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../services/userService';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  return await getUserInfo();
});

const userSlice = createSlice({
  name: 'user',
  initialState: { data: {}, status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default userSlice.reducer;
