import { SystemState } from '@/types/common';
import { createSlice } from '@reduxjs/toolkit';

const initialState: SystemState = {
  isLoading: false,
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = systemSlice.actions;

export default systemSlice.reducer;
