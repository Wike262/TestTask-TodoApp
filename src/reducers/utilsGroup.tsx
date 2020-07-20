import { Groups, Group } from '../types';
import { GroupAction } from '../actions';
import { updateItemInArray, updateObject } from './utils';

let nextGroupId = 0;

function getGroupIndex(state: Array<Groups>, action: GroupAction): number {
	return state.findIndex((item) => ('id' in action.payload ? item.id === action.payload.id : null));
}

export function addGroup(state: Array<Groups>, action: GroupAction): Array<Groups> {
	if ('text' in action.payload) {
		const newGroup = state.concat({
			tasks: [],
			id: nextGroupId++,
			text: action.payload.text!,
			visibilityFilter: 'SHOW_ALL',
		});
		return newGroup;
	}
	return state;
}

export function editGroup(state: Array<Groups>, action: GroupAction): Array<Groups> {
	if ('id' in action.payload) {
		const newGroup = updateItemInArray(state, action.payload.id!, (group: Group) => {
			return 'text' in action.payload ? updateObject(group, { text: action.payload.text }) : null;
		});

		return newGroup;
	}
	return state;
}

export function deleteGroup(state: Array<Groups>, action: GroupAction): Array<Groups> {
	let newGroups = [...state.slice(0, getGroupIndex(state, action)), ...state.slice(getGroupIndex(state, action) + 1)];
	return newGroups;
}

export function reorderGroup(state: Array<Groups>, action: GroupAction): Array<Groups> {
	let movedGroup = state.slice();
	if ('sourceIndex' in action.payload && 'destinationIndex' in action.payload) {
		let handler = movedGroup[action.payload.sourceIndex];
		movedGroup[action.payload.sourceIndex] = movedGroup[action.payload.destinationIndex];
		movedGroup[action.payload.destinationIndex] = handler;
		return movedGroup;
	}
	return state;
}
