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

function reorderTask(tasksState, action) {
 let movedTask = tasksState.slice();
 let handler = movedTask[action.id]
 movedTask[action.id] = movedTask[action.index]
 movedTask[action.index] = handler
 return movedTask
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
 return [...tasksState.slice(0, index), ...tasksState.slice(index + 1)]
}

function reorderGroup(groupState, action) {
 let movedGroup = groupState.slice();
 let handler = movedGroup[action.id]
 movedGroup[action.id] = movedGroup[action.index]
 movedGroup[action.index] = handler
 return movedGroup
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
  case "REORDER_TASK":
   return reorderTask(tasksState, action)
  default:
   return tasksState;
 }
}

function groups(state = [], action) {
 switch (action.type) {
  case "ADD_GROUP":
   return [...state, addGroup(state, action)];
  case "EDIT_GROUP":
   return editGroup(state, action)
  case "DELETE_GROUP":
   let indexItem = state.findIndex((item) => item.id === action.id)
   return deleteGroup(state, action, indexItem)
  case "REORDER_GROUP":
   return reorderGroup(state, action)
  case "ADD_TASK":
  case "TOGGLE_TASK":
  case "EDIT_TASK":
  case "DELETE_TASK":
  case "REORDER_TASK":
   return state.map((item) => {
    let indexItem = item.tasks.findIndex((item) => item.id === action.id)
    return item.id === action.groupId ? { ...item, tasks: tasksReducer(item.tasks, action, indexItem) } : item
   })
  case "MOVE_TASK":
   let updatedState = state.slice()
   let handler = updatedState[action.groupId].tasks[action.id]
   console.log(action)

   updatedState[action.groupId].tasks = deleteTask(updatedState[action.groupId].tasks, action, action.id)
   updatedState[action.newGroupId].tasks[action.index] = handler
   return updatedState

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