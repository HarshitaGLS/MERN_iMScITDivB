// const { configureStore } = require("@reduxjs/toolkit");//commanjs
import { configureStore } from "@reduxjs/toolkit"; // ES6 module
import counterSlice from "./counterSlice";
const mystore = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})
export default mystore