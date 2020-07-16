let nextTaskId = 0;
let nextGroupId = 0;

export const addTask = (text, groupId) => ({
 type: "ADD_TASK",
 payload: {
  id: nextTaskId++,
  text,
  groupId,
 }
});

export const addGroup = (text) => ({
 type: "ADD_GROUP",
 payload: {
  id: nextGroupId++,
  text,
 }
});

export const editTask = (id, text, groupId) => ({
 type: "EDIT_TASK",
 payload: {
  id,
  text,
  groupId,
 }
});

export const deleteTask = (id, groupId) => ({
 type: "DELETE_TASK",
 payload: {
  id,
  groupId,
 }
});

export const toggleTask = (id, groupId) => ({
 type: "TOGGLE_TASK",
 payload: {
  id,
  groupId,
 }
});

export const editGroup = (id, text) => ({
 type: "EDIT_GROUP",
 payload: {
  id,
  text,
 }
});

export const deleteGroup = (id) => ({
 type: "DELETE_GROUP",
 payload: {
  id,
 }
});

export const reorderGroup = (id, index) => ({
 type: "REORDER_GROUP",
 payload: {
  id,
  index,
 }
})

export const reorderTask = (id, index, groupId) => ({
 type: "REORDER_TASK",
 payload: {
  id,
  index,
  groupId,
 }
})

export const moveTask = (id, index, groupId, newGroupId) => ({
 type: "MOVE_TASK",
 payload: {
  id,
  index,
  groupId,
  newGroupId,
 }
})

export const setVisibilityFilter = filter => ({
 type: 'SET_VISIBILITY_FILTER',
 payload: {
  filter
 }
})

export const VisibilityFilters = {
 SHOW_ALL: 'SHOW_ALL',
 SHOW_COMPLETED: 'SHOW_COMPLETED',
 SHOW_ACTIVE: 'SHOW_ACTIVE'
}