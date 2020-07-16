import { tasksReducer } from './tasksReducer'
import { addGroup, editGroup, deleteGroup, reorderGroup } from './utils'

export function groups(state = [], action) {
 switch (action.type) {
  case "ADD_GROUP":
   return addGroup(state, action);
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
  case "MOVE_TASK":
   return tasksReducer(state, action)
  default:
   return state;
 }
}