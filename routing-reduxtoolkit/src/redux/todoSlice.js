import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{todos:[]},
    reducers:{
        addTask(state,action){
            // console.log(action)
            state.todos.push({id:Date.now() , text:action.payload})
        },
        removeTask(state,action){
            //id =>action.payload
           const filters =  state.todos.filter((todo)=>todo.id !=action.payload)
           state.todos =  filters
        },
        updateTask(state,action){},
    }
})
export default todoSlice
export const {addTask,removeTask,updateTask} =  todoSlice.actions