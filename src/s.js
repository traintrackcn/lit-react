import LITReducer from "./LITReducer";
import { createStore } from "redux";
import { combineReducers } from 'redux-immutable';
import LITStore from "./LITStore";

export const r = new LITReducer();
const rootReducer = combineReducers({
    r: r.reducer
});
const store = createStore(rootReducer);
export default new LITStore(store, r);