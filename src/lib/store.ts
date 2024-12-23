import { configureStore } from '@reduxjs/toolkit';
import systemReducer from './features/systems/systemSlice';

export const recoInterviewStore = () => {
  return configureStore({
    reducer: {
      system: systemReducer,
    },
  });
};

export type AppStore = ReturnType<typeof recoInterviewStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
