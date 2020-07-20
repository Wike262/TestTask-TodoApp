import { tasksReducer } from './tasksReducer';
import { visibilityFilter } from './visibilityFilter';
import { GroupAction } from '../actions';
import { Groups } from '../types';
import * as consts from '../constants';
import { addGroup, editGroup, deleteGroup, reorderGroup } from './utilsGroup';

export function groups(state: Array<Groups> = [], action: GroupAction): Array<Groups> {
	switch (action.type) {
		case consts.ADD_GROUP:
			return addGroup(state, action);
		case consts.EDIT_GROUP:
			return editGroup(state, action);
		case consts.DELETE_GROUP:
			return deleteGroup(state, action);
		case consts.REORDER_GROUP:
			return reorderGroup(state, action);
		case consts.ADD_TASK:
		case consts.TOGGLE_TASK:
		case consts.EDIT_TASK:
		case consts.DELETE_TASK:
		case consts.REORDER_TASK:
		case consts.MOVE_TASK:
			return tasksReducer(state, action);
		case consts.SET_VISIBILITY_FILTER:
			return visibilityFilter(state, action);
		default:
			return state;
	}
}
