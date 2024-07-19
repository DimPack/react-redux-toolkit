import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import todoReduser from "./todoSlice";


const rootReducer = combineReducers({
  count: countReducer,
  todo: todoReduser,
});

export default rootReducer;
