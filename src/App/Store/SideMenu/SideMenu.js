import { createSlice } from "@reduxjs/toolkit";





const DesktopWithInfoSlice = createSlice({
  name: "sideMenu",
  initialState: {
    Open: false,   
  },
  reducers: {
    setOpenDesktop: (state, action) => {
      state.Open = action.payload;
    },
    
  },
 
});

export const { setOpenDesktop } = DesktopWithInfoSlice.actions;

export const selectOpen = (state) => state.sideMenu.Open;

export default DesktopWithInfoSlice.reducer;