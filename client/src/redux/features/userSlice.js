import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
<<<<<<< HEAD
  },   
=======
  },
>>>>>>> dbca6889cf75e885aed6a9f17bbe4e21ad06b8f8
});

export const { setUser } = userSlice.actions;
