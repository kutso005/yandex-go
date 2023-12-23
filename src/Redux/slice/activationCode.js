// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../../API';

export const verifyCode = createAsyncThunk('auth/verifyCode', async (activationCodeCredential) => {
  try {
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    code: null,
    error: null,
    loading: false,
    message: '',
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.code = action.payload;
        // state.message = action.payload.message;
        // state.phone = action.payload.phone;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { registerStart, registerSuccess, registerFailure } = authSlice.actions;

export default authSlice.reducer;
