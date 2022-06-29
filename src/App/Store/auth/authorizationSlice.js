import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    token: localStorage.getItem("token") || "",
    refreshToken: localStorage.getItem("refresh-token") || "",
    name: localStorage.getItem("name") || "",
    status: localStorage.getItem("status") || "",
  },

  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("refresh-token", action.payload.refreshToken);
      localStorage.setItem("status", 'Logueado');
      localStorage.setItem("name", action.payload.name);
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.name=action.payload.name;
      state.status=true;
    },
    logout: (state) => {
      console.log('Logout')
      localStorage.removeItem("token");
      localStorage.removeItem("refresh-token");
      localStorage.removeItem("name");
      localStorage.removeItem("status");
      state.token = "";
      state.refreshToken = "";
      state.name='';
      state.status=false;
    },
  },
});

export const { login, logout } = authorizationSlice.actions;

export const selectUserName = (state) => state.authorization.name;
export const selectStatus = (state) => state.authorization.status;

export default authorizationSlice.reducer;
