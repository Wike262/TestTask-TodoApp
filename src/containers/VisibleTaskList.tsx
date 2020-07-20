import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import * as consts from '../constants';
import { StoreState } from '../types';

export interface Tasks {
	id: number;
	text: string;
	completed: boolean;
}

const getVisibleTasks = (tasks: Tasks[], filter: string) => {
	switch (filter) {
		case consts.SHOW_ALL:
			return tasks;
		case consts.SHOW_COMPLETED:
			return tasks.filter((t) => t.completed);
		case consts.SHOW_ACTIVE:
			return tasks.filter((t) => !t.completed);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
};

function getGroup(state: StoreState, id: number) {
	return state.groups.find((item) => item.id === id)!;
}

const getTasks = (state: StoreState, id: Number) => {
	return state.groups.find((item) => item.id === id)?.tasks!;
};

const mapStateToProps = (state: StoreState, ownProp: { groupId: number; groupIndex: number }) => ({
	tasks: getVisibleTasks(getTasks(state, ownProp.groupId), getGroup(state, ownProp.groupId).visibilityFilter),
	groupId: ownProp.groupId,
	groupIndex: ownProp.groupIndex,
});

const mapDispatchToProps = (
	dispatch = {},
	ownProp: {
		groupId: number;
		groupIndex: number;
	}
) => ({
	toggleTask: (id: number, groupId: number) => ({ type: consts.TOGGLE_TASK, payload: { id, groupId } }),
	editTask: (id: number, text: string, groupId: number) => ({ type: consts.EDIT_TASK, payload: { id, text, groupId } }),
	deleteTask: (id: number, groupId: number) => ({ type: consts.DELETE_TASK, payload: { id, groupId } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
