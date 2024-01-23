// strore .js

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { TodoReducer } from "./reducers/TodoReducer";


const reducer= combineReducers({  //contain all reducers
Todo:TodoReducer

})

const initialState={};  //here all of are data will lie

const middleware = [thunk]; //there can be multiple middlewares here

export const store = createStore(
    reducer,
    initialState,
   composeWithDevTools( applyMiddleware(...middleware)) // passing middleware 
    );
export default store;