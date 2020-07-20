import * as consts from '../constants';

export interface StoreState {
	groups: Array<Groups>;
}

export interface Groups {
	tasks: Array<Tasks>;
	id: number;
	text: string;
	visibilityFilter: string;
}

export interface Tasks {
	id: number;
	text: string;
	completed: boolean;
}

export interface AddTask {
	type: consts.ADD_TASK;
	payload: Task;
}

export interface EditTask {
	type: consts.EDIT_TASK;
	payload: Task;
}

export interface DeleteTask {
	type: consts.DELETE_TASK;
	payload: Task;
}

export interface ToggleTask {
	type: consts.TOGGLE_TASK;
	payload: Task;
}

export interface MoveTask {
	type: consts.MOVE_TASK;
	payload: {
		sourceIndex: number;
		destinationIndex: number;
		groupId: number;
		newGroupId: number;
	};
}

export interface ReorderTask {
	type: consts.REORDER_TASK;
	payload: {
		sourceIndex: number;
		destinationIndex: number;
		groupId: number;
	};
}

export interface AddGroup {
	type: consts.ADD_GROUP;
	payload: Group;
}

export interface EditGroup {
	type: consts.EDIT_GROUP;
	payload: Group;
}

export interface DeleteGroup {
	type: consts.DELETE_GROUP;
	payload: Group;
}

export interface ReorderGroup {
	type: consts.REORDER_GROUP;
	payload: {
		sourceIndex: number;
		destinationIndex: number;
	};
}

export interface SetVisibilityFilter {
	type: consts.SET_VISIBILITY_FILTER;
	payload: {
		groupId: number;
		filter: string;
	};
}

export interface Task {
	id: number;
	text?: string;
	groupId: number;
}

export interface Group {
	id?: number;
	text?: string;
}
