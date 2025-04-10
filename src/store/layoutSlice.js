import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTab: 'Dashboard',
  isSidebarOpen: true,
  isMobileSidebarOpen: false
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setIsMobileSidebarOpen: (state, action) => {
      state.isMobileSidebarOpen = action.payload;
    }
  }
});

export const { setSelectedTab, toggleSidebar, setIsMobileSidebarOpen } = layoutSlice.actions;
export default layoutSlice.reducer;
