import { configureStore } from "@reduxjs/toolkit";
import selectedFieldReducer from "./slices/selectedFieldSlice";
import kpireducer from "./slices/kpireducer";
import userReducer from "./slices/userSlice.jsx";

const store = configureStore({
  reducer: {
    selectedField: selectedFieldReducer,
    selectpagekpi:kpireducer,
    user: userReducer,
  },
});

export default store;
