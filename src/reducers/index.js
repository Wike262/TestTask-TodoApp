import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions"

function updateObject(oldObject, newValues) {
 return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
 const updatedItems = array.map((item) => {
  if (item.id !== itemId) {
   return item;
  }
  const updatedItem = updateItemCallback(item);
  return updatedItem;
 });

 return updatedItems;
}

function addTask(tasksState, action) {
 const newTask = tasksState.concat({
  id: action.id,
  text: action.text,
  completed: false,
 });
 return newTask;
}

function toggleTask(tasksState, action) {
 const newTodos = updateItemInArray(tasksState, action.id, (task) => {
  return updateObject(task, { completed: !task.completed });
 });

 return newTodos;
}

function editTask(tasksState, action) {
 const newTodos = updateItemInArray(tasksState, action.id, (task) => {
  return updateObject(task, { text: action.text });
 });

 return newTodos;
}

function deleteTask(tasksState, action, index) {
 return [...tasksState.slice(0, index), ...tasksState.slice(index + 1)]
}

function addGroup(groupState, action) {
 const newGroup = {
  tasks: tasksReducer(groupState.tasks, action),
  id: action.id,
  text: action.text
 }
 return newGroup
}

function editGroup(groupState, action) {
 const newTodos = updateItemInArray(groupState, action.id, (group) => {
  return updateObject(group, { text: action.text });
 });

 return newTodos;
}

function deleteGroup(tasksState, action, index) {
 console.log(tasksState)
 return [...tasksState.slice(0, index), ...tasksState.slice(index + 1)]
}

function tasksReducer(tasksState = [], action, index) {
 switch (action.type) {
  case "ADD_TASK":
   return addTask(tasksState, action);
  case "TOGGLE_TASK":
   return toggleTask(tasksState, action);
  case "EDIT_TASK":
   return editTask(tasksState, action);
  case "DELETE_TASK":
   return deleteTask(tasksState, action, index);
  default:
   return tasksState;
 }
}

function groups(state = [], action) {
 let updatedGroup
 switch (action.type) {
  case "ADD_GROUP":
   return [...state, addGroup(state, action)];
  case "EDIT_GROUP":
   return editGroup(state, action)
  case "DELETE_GROUP":
   let indexItem = state.findIndes((item) => item.id === action.id)
   return deleteGroup(state, action, indexItem)
  case "ADD_TASK":
  case "TOGGLE_TASK":
  case "EDIT_TASK":
  case "DELETE_TASK":
   updatedGroup = state.map((item) => {
    let indexItem = item.tasks.findIndex((item) => item.id === action.id)
    return item.id === action.groupId ? { ...item, tasks: tasksReducer(item.tasks, action, indexItem) } : item
   })
   return updatedGroup;
  default:
   return state;
 }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
 switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
   return action.filter
  default:
   return state
 }
}

const appReducer = combineReducers({
 groups,
 visibilityFilter,
});

export default appReducer