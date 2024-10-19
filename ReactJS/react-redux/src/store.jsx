// store.jsx
import { applyMiddleware, createStore } from "redux";
import IncDecCounterReducer from "./Reducers/IncDecReducer";
import { thunk } from "redux-thunk";

const store = createStore(
    IncDecCounterReducer,
    applyMiddleware(thunk)
);

export default store;