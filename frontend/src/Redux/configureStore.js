// configureStore.js
import {legacy_createStore,applyMiddleware,combineReducers} from "redux"

import {thunk} from "redux-thunk"
import { reducer as productreducer } from "./reducer/reducer";
export const store = legacy_createStore(
   combineReducers({productreducer}),applyMiddleware(thunk)
);

export default store;
