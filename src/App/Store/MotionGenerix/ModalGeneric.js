import { createSlice } from "@reduxjs/toolkit";





const ModalGenericSlice = createSlice({
  name: "modalGeneric",
  initialState: {
    Open: false,  
    Content: null,
    Title: null,    
  },
  reducers: {
    setOpenModal: (state, action) => {
      state.Open = action.payload;
    },
    setContentModal: (state, action) => {
      state.Content = action.payload;
    },
    setTitleModal: (state, action) => {
      state.Title = action.payload;
    },
    
  },
 
});

export const { setOpenModal,setContentModal,setTitleModal} = ModalGenericSlice.actions;

export const selectOpen = (state) => state.modalGeneric.Open;
export const selectContent = (state) => state.modalGeneric.Content;
export const selectTitle = (state) => state.modalGeneric.Title;

export default ModalGenericSlice.reducer;