import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactions } from '../services/transactionService';

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  return await getTransactions();
});

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: { data: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default transactionSlice.reducer;
