import { Groups, Group } from '../types';
import { GroupAction, VisibilityFilter } from '../actions';
import { Tasks } from '../containers/VisibleTaskList';

export function updateObject(oldObject: {}, newValues: {}): {} {
	return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array: Array<{ id: number }>, itemId: number, updateItemCallback: any) {
	const updatedItems = array.map((item) => {
		if (item.id !== itemId) {
			return item;
		}
		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});

	return updatedItems;
}

export function updateState(state: Array<Groups>, action: GroupAction, newValue: Array<Tasks>): Array<Groups> {
	let updated = state.slice();
	return updated.map((item) => {
		if ('groupId' in action.payload) {
			return item.id === action.payload.groupId ? { ...item, tasks: newValue } : item;
		}
		return item;
	});
}

export function updateFilter(state: Array<Groups>, action: VisibilityFilter): Array<Groups> {
	const newGroup = updateItemInArray(state, action.payload.groupId!, (group: Group) => {
		return 'filter' in action.payload ? updateObject(group, { visibilityFilter: action.payload.filter }) : null;
	});
	return newGroup;
}
