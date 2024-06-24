import { createSlice } from "@reduxjs/toolkit";

//khởi tạo state
const state:number = 0;

const countReducer = createSlice({
    name:"CountReducer",
    initialState:state,
    reducers:{
        // đây là những actions
        increase:(state) =>state+=1,
        decrease:(state)=>state -=1,
        resetState:(state)=>state=0
    }
})

// xuất ra các action
export const {increase, decrease, resetState} = countReducer.actions

// xuất ra reducer
export default countReducer.reducer