import { combineReducers } from 'redux';
import { groups } from './groupReducer';

const appReducer = combineReducers({
	groups,
});

export default appReducer;
