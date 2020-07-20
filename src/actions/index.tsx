import * as consts from '../constants';
import * as types from '../types';

export type TasksAction =
	| types.AddTask
	| types.EditTask
	| types.DeleteTask
	| types.ToggleTask
	| types.ReorderTask
	| types.MoveTask;

export type GroupAction =
	| types.AddGroup
	| types.EditGroup
	| types.DeleteGroup
	| types.ReorderGroup
	| TasksAction
	| VisibilityFilter;

export type VisibilityFilter = types.SetVisibilityFilter;

export function addTask(newTask: types.Task): types.AddTask {
	return {
		type: consts.ADD_TASK,
		payload: newTask,
	};
}

export function editTask(newTask: types.Task): types.EditTask {
	return {
		type: consts.EDIT_TASK,
		payload: newTask,
	};
}

export function deleteTask(newTask: types.Task): types.DeleteTask {
	return {
		type: consts.DELETE_TASK,
		payload: newTask,
	};
}

export function toggleTask(newTask: types.Task): types.ToggleTask {
	return {
		type: consts.TOGGLE_TASK,
		payload: newTask,
	};
}

export function moveTask(
	sourceIndex: number,
	destinationIndex: number,
	groupId: number,
	newGroupId: number
): types.MoveTask {
	return {
		type: consts.MOVE_TASK,
		payload: {
			sourceIndex,
			destinationIndex,
			groupId,
			newGroupId,
		},
	};
}

export function reorderTask(sourceIndex: number, destinationIndex: number, groupId: number): types.ReorderTask {
	return {
		type: consts.REORDER_TASK,
		payload: {
			sourceIndex,
			destinationIndex,
			groupId,
		},
	};
}

export function addGroup(newGroup: types.Group): types.AddGroup {
	return {
		type: consts.ADD_GROUP,
		payload: newGroup,
	};
}

export function editGroup(newGroup: types.Group): types.EditGroup {
	return {
		type: consts.EDIT_GROUP,
		payload: newGroup,
	};
}

export function deleteGroup(newGroup: types.Group): types.DeleteGroup {
	return {
		type: consts.DELETE_GROUP,
		payload: newGroup,
	};
}

export function reorderGroup(sourceIndex: number, destinationIndex: number): types.ReorderGroup {
	return {
		type: consts.REORDER_GROUP,
		payload: {
			sourceIndex,
			destinationIndex,
		},
	};
}

export function setVisibilityFilter(groupId: number, filter: string): types.SetVisibilityFilter {
	return {
		type: consts.SET_VISIBILITY_FILTER,
		payload: {
			groupId,
			filter,
		},
	};
}
