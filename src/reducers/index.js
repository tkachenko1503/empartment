import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";

import department from './department';
import employee from './employee';

// main reducer
export const reducers = combineReducers({
  routing: routerReducer,
  departments: department,
  employees: employee,
  form: formReducer
});
