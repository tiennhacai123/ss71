import { createSlice } from "@reduxjs/toolkit"

const state:number[] = [2,5,6,8]

const randomReducer = createSlice({
    name:"randomReducer",
    initialState:state,
    reducers:{
        randomNumber:(state)=>state = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
    }
})

export const {randomNumber} = randomReducer.actions

export default randomReducer.reducer