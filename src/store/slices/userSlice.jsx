import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { profile: null, authToken: null },
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload.userData;
      state.authToken = action.payload.token;
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;