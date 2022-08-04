import { createSlice } from "@reduxjs/toolkit";





const NavEffectSlice = createSlice({
  name: "navEffect",
  initialState: { 
    NavOpacity: [false,false,false] 
  },
  reducers: {
    setNavOpacity: (state, action) => {      
      state.NavOpacity = action.payload;
    },
 
    
  },
 
});

export const {setNavOpacity} = NavEffectSlice.actions;

export const selectNavOpacity = (state) => state.navEffect.NavOpacity;

export default NavEffectSlice.reducer;