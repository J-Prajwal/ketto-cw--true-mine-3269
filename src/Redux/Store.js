import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/app.reducer";
import { reducer as AuthReducer } from "./AuthReducer/auth.reducer";
 
const rootReducer = combineReducers({
  AppReducer,
  AuthReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
