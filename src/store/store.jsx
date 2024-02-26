import { configureStore } from "@reduxjs/toolkit";
import selectedFieldReducer from "./slices/selectedFieldSlice";
import kpireducer from "./slices/kpireducer"

const store = configureStore({
  reducer: {
    selectedField: selectedFieldReducer,
    selectpagekpi:kpireducer,
  },
});

export default store;
