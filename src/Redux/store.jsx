import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import  activationReduser from "./slice/activationCode"
const store = configureStore({
  reducer: {
    auth: authReducer,
    code:activationReduser,
  },
});
export default store;
