import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './redux/cardSlice';
import transactionReducer from './redux/transactionSlice';
import chartReducer from './redux/chartSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    transactions: transactionReducer,
    charts: chartReducer,
  },
});
