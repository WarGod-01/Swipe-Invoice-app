import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/index";
import invoicesSlice from "./redux/invoicesSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
