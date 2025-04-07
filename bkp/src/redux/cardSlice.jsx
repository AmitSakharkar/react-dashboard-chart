import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCardData } from '../services/cardService';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  return await getCardData();
});

const cardSlice = createSlice({
  name: 'cards',
  initialState: { data: {}, status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default cardSlice.reducer;
