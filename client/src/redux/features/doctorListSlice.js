import { createSlice } from "@reduxjs/toolkit";

export const doctorListSlice = createSlice({
  name: "doctorList",
  initialState: {
    doctorList: null,
  },
  reducers: {
    setDoctorList: (state, action) => {
      state.doctorList = action.payload;
    },
  },
});

export const { setDoctorList } = doctorListSlice.actions;
