import { addTask, toggleTask, editTask, deleteTask, reorderTask, moveTask } from './utilsTasks';
import { Groups } from '../types';
import { TasksAction } from '../actions';
import * as consts from '../constants';

export function tasksReducer(state: Array<Groups>, action: TasksAction) {
	switch (action.type) {
		case consts.ADD_TASK:
			return addTask(state, action);
		case consts.TOGGLE_TASK:
			return toggleTask(state, action);
		case consts.EDIT_TASK:
			return editTask(state, action);
		case consts.DELETE_TASK:
			return deleteTask(state, action);
		case consts.REORDER_TASK:
			return reorderTask(state, action);
		case consts.MOVE_TASK:
			return moveTask(state, action);
		default:
			return state;
	}
}
