import { configureStore } from "@reduxjs/toolkit";
import countReducer from './countSlice'


const store = configureStore({
    reducer: {
        count: countReducer,
        // users: useReducer,
    }
});

export default store;