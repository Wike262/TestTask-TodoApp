import { Groups } from '../types';
import { TasksAction } from '../actions';
import { Tasks } from '../containers/VisibleTaskList';
import { updateObject, updateItemInArray, updateState } from './utils';

let nextTaskId = 0;

function getTasks(state: Array<Groups>, action: TasksAction) {
	return state.find((item) => {
		return item.id === action.payload.groupId;
	})!.tasks;
}

function getTaskIndex(state: Array<Groups>, action: TasksAction): number {
	for (let i = 0; i < state.length; i++) {
		if (state[i].id === action.payload.groupId)
			return state[i].tasks.findIndex((item) => {
				return 'id' in action.payload ? item.id === action.payload.id : false;
			});
		return 0;
	}
	return 0;
}

export function addTask(state: Array<Groups>, action: TasksAction): Array<Groups> {
	if ('text' in action.payload) {
		let updatedState = state.slice();
		const newTask = {
			id: nextTaskId++,
			text: action.payload.text!,
			completed: false,
		};
		return updatedState.map((item) => {
			return item.id === action.payload.groupId ? { ...item, tasks: item.tasks.concat(newTask) } : item;
		});
	}
	return state;
}

export function toggleTask(state: Array<Groups>, action: TasksAction): Array<Groups> {
	let tasksState = getTasks(state, action);
	if ('id' in action.payload) {
		const newTasks = updateItemInArray(tasksState, action.payload.id, (task: Tasks) => {
			console.log(updateObject(task, { completed: !task.completed }));
			return updateObject(task, { completed: !task.completed });
		});
		return updateState(state, action, newTasks);
	}
	return state;
}

export function editTask(state: Array<Groups>, action: TasksAction): Array<Groups> {
	let tasksState = getTasks(state, action);
	if ('id' in action.payload && 'text' in action.payload) {
		const newTasks = updateItemInArray(tasksState, action.payload.id, (task: Tasks) => {
			return 'text' in action.payload ? updateObject(task, { text: action.payload.text }) : task;
		});

		return updateState(state, action, newTasks);
	}
	return state;
}

export function deleteTask(state: Array<Groups>, action: TasksAction): Array<Groups> {
	let tasksState = getTasks(state, action);
	return updateState(state, action, [
		...tasksState.slice(0, getTaskIndex(state, action)),
		...tasksState.slice(getTaskIndex(state, action)! + 1),
	]);
}

export function reorderTask(state: Array<Groups>, action: TasksAction): Array<Groups> {
	if ('sourceIndex' in action.payload && 'destinationIndex' in action.payload) {
		let tasksState = getTasks(state, action);
		let movedTask = tasksState.slice();
		let handler = movedTask[action.payload.sourceIndex];
		movedTask[action.payload.sourceIndex] = movedTask[action.payload.destinationIndex];
		movedTask[action.payload.destinationIndex] = handler;
		return updateState(state, action, movedTask);
	}
	return state;
}

export function moveTask(state: Array<Groups>, action: TasksAction): Array<Groups> {
	let updatedGroups = state.slice();
	if ('sourceIndex' in action.payload && 'newGroupId' in action.payload) {
		let handler = updatedGroups[action.payload.groupId].tasks[action.payload.sourceIndex];
		updatedGroups[action.payload.groupId].tasks = [
			...updatedGroups[action.payload.groupId].tasks.slice(0, action.payload.sourceIndex),
			...updatedGroups[action.payload.groupId].tasks.slice(action.payload.sourceIndex + 1),
		];
		if (updatedGroups[action.payload.newGroupId].tasks[action.payload.destinationIndex]) {
			updatedGroups[action.payload.newGroupId].tasks.splice(action.payload.destinationIndex, 0, handler);
		} else updatedGroups[action.payload.newGroupId].tasks[action.payload.destinationIndex] = handler;
		return updatedGroups;
	}
	return state;
}
