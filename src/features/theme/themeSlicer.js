import { createSlice } from "@reduxjs/toolkit";

export const themeSlicer = createSlice({
  name: "theme",

  initialState: {
    value: "",
  },

  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlicer.actions;

export default themeSlicer.reducer;
