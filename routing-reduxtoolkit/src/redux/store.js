// const { configureStore } = require("@reduxjs/toolkit");//commanjs
import { configureStore } from "@reduxjs/toolkit"; // ES6 module
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
const mystore = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        todo:todoSlice.reducer
    }
})
export default mystore