import { createSlice } from "@reduxjs/toolkit"

const state:boolean = false

const reducerChangeLight = createSlice({
    name:"reducerChangelight",
    initialState:state,
    reducers:{
        changeLight:(state) => !state
    }
})

export const {changeLight} = reducerChangeLight.actions

export default reducerChangeLight.reducer