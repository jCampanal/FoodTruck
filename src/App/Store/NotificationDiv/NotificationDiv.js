import { createSlice } from "@reduxjs/toolkit";





const NotificationDivSlice = createSlice({
  name: "notificationDiv",
  initialState: {
    OpenNotification: false,  
    Content: '',
    Status: 'fall',    
  },
  reducers: {
    setOpenNotification: (state, action) => {
      state.OpenNotification = action.payload;
    },
    setContentNotification: (state, action) => {
      state.Content = action.payload;
    },
    setStatusNotification: (state, action) => {
      state.Status = action.payload;
    },
    
  },
 
});

export const { setOpenNotification,setContentNotification,setStatusNotification} = NotificationDivSlice.actions;

export const selectOpenNotification = (state) => state.notificationDiv.OpenNotification;
export const selectContent = (state) => state.notificationDiv.Content;
export const selectStatus = (state) => state.notificationDiv.Status;

export default NotificationDivSlice.reducer;