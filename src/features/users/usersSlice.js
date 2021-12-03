import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../users";

const initialState = users;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
