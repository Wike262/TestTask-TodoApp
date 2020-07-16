import { addTask, toggleTask, editTask, deleteTask, reorderTask, moveTask } from './utils'

export function tasksReducer(state, action) {
 switch (action.type) {
  case "ADD_TASK":
   return addTask(state, action);
  case "TOGGLE_TASK":
   return toggleTask(state, action);
  case "EDIT_TASK":
   return editTask(state, action);
  case "DELETE_TASK":
   return deleteTask(state, action);
  case "REORDER_TASK":
   return reorderTask(state, action)
  case "MOVE_TASK":
   return moveTask(state, action)
  default:
   return state;
 }
}
