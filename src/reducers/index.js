import { combineReducers } from "redux";
import { visibilityFilter } from "./visibilityFilter"
import { groups } from './groupReducer'

const appReducer = combineReducers({
 groups,
 visibilityFilter,
});

export default appReducer