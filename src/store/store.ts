import { configureStore } from "@reduxjs/toolkit";
import  counts  from "./reducer/CountReducer";
import randomReducer from "./reducer/randomReducer";
import reducerChangeLight from "./reducer/changeLight"
import modeReducer from "./reducer/modeReducer";
import menuReducer from "./reducer/menuReducer";
import languageReducer from "./reducer/languageReducer";
import userReducer from "./reducer/userReducer";

export const store:any = configureStore({
    reducer:{
        count:counts,
        randomNumber:randomReducer,
        changeLight:reducerChangeLight,
        modeReducer:modeReducer,
        menuReducer:menuReducer,
        languageReducer:languageReducer,
        userReducer:userReducer
    }
})
