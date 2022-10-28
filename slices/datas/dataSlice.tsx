import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: HomeProps1 ,
  readOnlyValue: HomeProps1
}

type HomeProps1 = SomeObj[]

export interface CounterState {

  value: HomeProps1 ,
  readOnlyValue: HomeProps1

}

const initialState: CounterState = {
  value: [],
  readOnlyValue: [],
};

export const dataSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {

    uploadAllFirst:(state, action: PayloadAction<HomeProps1>)=>{
      state.readOnlyValue = action.payload


    },
    uploadAll: (state) => {
      state.value = state.readOnlyValue;
    },
    uploadAllRemove: (state) => {
      state.value = [];
    },
    uploadAdd: (state, action: PayloadAction<string>) => {

          let clone: HomeProps1 = state.value.slice()
          state.readOnlyValue.forEach((x: any) => {
            let i: string = action.payload
            if (x.userId === Number(i)) {
              clone.push(x)
            }
          })
          state.value = clone
         
      
     
    },
    uploadRemove:(state, action: PayloadAction<string>)=>{
      let clone: HomeProps1 = state.value.slice()
      let i: string = action.payload
      clone = clone.filter((x:any)=>x.userId !== Number(i))
      state.value = clone
    }

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
