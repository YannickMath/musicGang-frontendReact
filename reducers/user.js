import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
   firstname : null,
   username: null,
   mail: null,
   password: null,
   status: null,  
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.firstname = action.payload.firstname;
      state.value.username = action.payload.username;
      state.value.mail= action.payload.mail;
      state.value.password = action.payload.password;
      state.status = true;
    },
    logout: (state) => {
      state.value.username = null;
      state.value.status =false
    },
  },
});

export const {
  login,
  logout,

} = userSlice.actions;
export default userSlice.reducer;
