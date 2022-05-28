import { createSlice } from "@reduxjs/toolkit";





const DesktopWithInfoSlice = createSlice({
  name: "desktopWithInfo",
  initialState: {
    Open: false,
    Close: false,    
    Content: null,    
  },
  reducers: {
    setOpenDesktop: (state, action) => {
      state.Open = action.payload;
    },
    setCloseDesktop: (state, action) => {               
        state.Close = action.payload;
    },
    setContentDesktop: (state, action) => {        
        state.Content = action.payload;
    },
    
  },
 
});

export const { setOpenDesktop, setCloseDesktop, setContentDesktop } = DesktopWithInfoSlice.actions;

export const selectOpen = (state) => state.desktopWithInfo.Open;
export const selectClose = (state) => state.desktopWithInfo.Close;
export const selectContent = (state) => state.desktopWithInfo.Content;

export default DesktopWithInfoSlice.reducer;