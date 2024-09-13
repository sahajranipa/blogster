import { createSlice } from "@reduxjs/toolkit";

const intialState = {};

const useSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {},
});

export const {} = useSlice.actions;

export default useSlice.reducer;
