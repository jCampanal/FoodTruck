import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    token: localStorage.getItem("token") || "",
    refreshToken: localStorage.getItem("refresh-token") || "",
  },

  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("refresh-token", action.payload.refreshToken);
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh-token");
      state.token = "";
      state.refreshToken = "";
    },
  },
});

export const { login, logout } = authorizationSlice.actions;
export default authorizationSlice.reducer;
