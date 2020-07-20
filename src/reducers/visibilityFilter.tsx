import * as consts from '../constants';
import { VisibilityFilter } from '../actions';
import { Groups } from '../types';
import { updateFilter } from './utils';

export const visibilityFilter = (state: Array<Groups>, action: VisibilityFilter): Array<Groups> => {
	switch (action.type) {
		case consts.SET_VISIBILITY_FILTER:
			return updateFilter(state, action);
		default:
			return state;
	}
};
