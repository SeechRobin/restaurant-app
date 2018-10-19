import { createStore, combineReducers } from "redux";
import orderReducer from "../order/reducer";

const rootReducer = combineReducers({
  order: orderReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Debub chrome extension.
);

export default store;
