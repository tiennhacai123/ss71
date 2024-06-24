import { createSlice } from "@reduxjs/toolkit"

const state:boolean = false

const menuReducer = createSlice({
    name:"menuReducer",
    initialState:state,
    reducers:{
        menu:state => !state
    }
})

export const {menu} = menuReducer.actions

export default menuReducer.reducer