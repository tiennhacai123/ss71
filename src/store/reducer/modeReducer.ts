import { createSlice } from "@reduxjs/toolkit";

const state:string = "none"

const modeReducer = createSlice({
    name:"modReducer",
    initialState:state,
    reducers:{
        listMode: state => state === "listMode" ? "none" : "listMode",
        gridMode: state => state === "gridMode" ? "none" : "gridMode"
    }
})

export const {listMode, gridMode} = modeReducer.actions;

export default modeReducer.reducer;