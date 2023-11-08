import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../slices/appSlice';
import { userSlice } from '../slices/userSlice';
import { steatmentSlice } from '../slices/steatmentSlice';
import { editSteatmentSlice } from '../slices/editSteatmentSlice';
import { existanceSlice } from '../slices/existanceSlice';


const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
    statment: steatmentSlice.reducer,
    editSteatment: editSteatmentSlice.reducer,
    existance: existanceSlice.reducer
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
