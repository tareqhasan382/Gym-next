"use client";

import { getFromLocalStorage } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const authString = getFromLocalStorage("gym");

const auth = authString ? JSON.parse(authString) : null;
const initialState = {
  accessToken: auth ? auth.accessToken : null,
  user: auth ? auth.user : undefined,
  error: null,
};

const authSlice = createSlice({
  name: "gym",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      localStorage.setItem(
        "gym",
        JSON.stringify({
          accessToken: action.payload.accessToken,
          user: action.payload.user,
        })
      );
    },
    userLoggedOut: (state) => {
      // Remove item from localStorage
      localStorage.removeItem("gym");
      // Reset state values
      state.accessToken = null;
      state.user = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

/*
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: undefined,
  error: null,
};

const authSlice = createSlice({
  name: "gym",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "gym",
          JSON.stringify({
            accessToken: action.payload.accessToken,
            user: action.payload.user,
          })
        );
      }
    },
    userLoggedOut: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("gym");
      }
      state.accessToken = null;
      state.user = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export const loadAuthFromLocalStorage = () => (dispatch) => {
  if (typeof window !== "undefined") {
    const authString = localStorage.getItem("gym");
    if (authString) {
      const auth = JSON.parse(authString);
      dispatch(userLoggedIn(auth));
    }
  }
};

export default authSlice.reducer;
*/
