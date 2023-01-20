//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/index";

// export default function configureStore(initialState) {
//   const store = createStore(reducer, initialState);
//   return store;
// }

export const store = configureStore({
  reducer: reducer,
});
