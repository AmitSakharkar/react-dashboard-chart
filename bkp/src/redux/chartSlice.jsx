import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getChartData } from '../services/chartService';

export const fetchChartData = createAsyncThunk('charts/fetchChartData', async () => {
  return await getChartData();
});

const chartSlice = createSlice({
  name: 'charts',
  initialState: { data: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchChartData.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default chartSlice.reducer;