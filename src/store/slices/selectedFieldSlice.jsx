import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const selectedFieldSlice = createSlice({
  name: "selectedField",
  initialState,
  reducers: {
    setSelectedField(state, action) {
      const { tableName, fieldName, value } = action.payload;
      const existingEntryIndex = state.findIndex(
        (entry) => entry.tableName === tableName
      );
      if (existingEntryIndex !== -1) {
        state[existingEntryIndex] = { tableName, fieldName, value };
      } else {
        state.push({ tableName, fieldName, value });
      }
    },

    removeSelectedField(state, action) {
      const tableNametoRemove = action.payload;
      return state.filter((entry) => entry.tableName !== tableNametoRemove);
    },
  },
});

export const { setSelectedField, removeSelectedField } =
  selectedFieldSlice.actions;
export default selectedFieldSlice.reducer;
