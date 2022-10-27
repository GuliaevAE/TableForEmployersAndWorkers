import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: { id: number }[];
  readOnlyValue: { id: number }[];
}

const initialState: CounterState = {
  value: [],
  readOnlyValue: [],
};

export const dataSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    uploadAllFirst: (state, action: PayloadAction<{ id: number }[]>) => {
      state.readOnlyValue = action.payload;
    },
    uploadAll: (state) => {
      state.value = state.readOnlyValue;
    },
    uploadAllRemove: (state) => {
      state.value = [];
    },
    uploadAdd: (state, action: PayloadAction<string>) => {
      let clone: { id: number }[] = state.value.slice();
      state.readOnlyValue.forEach((x: any) => {
        let i: string = action.payload;
        if (x.userId === Number(i)) {
          clone.push(x);
        }
      });
      state.value = clone;
    },
    uploadRemove: (state, action: PayloadAction<string>) => {
      let clone: { id: number }[] = state.value.slice();
      let i: string = action.payload;
      clone = clone.filter((x: any) => x.userId !== Number(i));
      state.value = clone;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  uploadAdd,
  uploadAll,
  uploadRemove,
  uploadAllFirst,
  uploadAllRemove,
} = dataSlice.actions;

export default dataSlice.reducer;
