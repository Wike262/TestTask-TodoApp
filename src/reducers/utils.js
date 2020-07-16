export function updateObject(oldObject, newValues) {
 return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
 const updatedItems = array.map((item) => {
  if (item.id !== itemId) {
   return item;
  }
  const updatedItem = updateItemCallback(item);
  return updatedItem;
 });

 return updatedItems;
}

function getTasks(state, action) {
 return state.find((item) => {
  return item.id === action.payload.groupId
 }).tasks
}

function getTaskIndex(state, action) {
 let index
 for (let i = 0; i < state.length; i++) {
  if (state[i].id === action.payload.groupId)
   index = state[i].tasks.findIndex((item) => item.id === action.payload.id)
 }
 return index
}

function updateGroup(state, action, newValue) {
 return state.map((item) => {
  return item.id === action.payload.groupId ? { ...item, tasks: newValue } : item
 })
}

export function addTask(state, action) {
 const newTask = {
  id: action.payload.id,
  text: action.payload.text,
  completed: false,
 };
 return state.map((item) => {
  return item.id === action.payload.groupId ? { ...item, tasks: item.tasks.concat(newTask) } : item
 })
}


export function toggleTask(state, action) {
 let tasksState = getTasks(state, action)
 const newTasks = updateItemInArray(tasksState, getTaskIndex(state, action), (task) => {
  return updateObject(task, { completed: !task.completed });
 });

 return updateGroup(state, action, newTasks)
}

export function editTask(state, action) {
 let tasksState = getTasks(state, action)
 const newTasks = updateItemInArray(tasksState, action.payload.id, (task) => {
  return updateObject(task, { text: action.payload.text });
 });

 return updateGroup(state, action, newTasks);
}

export function deleteTask(state, action) {
 let tasksState = getTasks(state, action)
 console.log(getTaskIndex(state, action))
 return updateGroup(state, action, [...tasksState.slice(0, getTaskIndex(state, action)), ...tasksState.slice(getTaskIndex(state, action) + 1)]);
}

export function reorderTask(state, action) {
 let tasksState = getTasks(state, action)
 let movedTask = tasksState.slice();
 let handler = movedTask[action.payload.id]
 movedTask[action.payload.id] = movedTask[action.payload.index]
 movedTask[action.payload.index] = handler
 return updateGroup(state, action, movedTask)
}




function getGroupIndex(state, action) {
 return state.findIndex((item) =>
  item.id === action.payload.id
 )
}

export function addGroup(state, action) {
 const newGroup = state.concat({
  tasks: [],
  id: action.payload.id,
  text: action.payload.text
 })
 return newGroup
}

export function editGroup(state, action) {
 const newGroup = updateItemInArray(state, action.payload.id, (group) => {
  return updateObject(group, { text: action.payload.text });
 });

 return newGroup;
}

export function deleteGroup(state, action) {
 return [...state.slice(0, getGroupIndex(state, action)), ...state.slice(getGroupIndex(state, action) + 1)]
}

export function reorderGroup(state, action) {
 let movedGroup = state.slice();
 let handler = movedGroup[action.payload.id]
 movedGroup[action.payload.id] = movedGroup[action.payload.index]
 movedGroup[action.payload.index] = handler
 return movedGroup
}

export function moveTask(state, action) {
 let updatedState = state.slice()
 let handler = updatedState[action.payload.groupId].tasks[action.payload.id]
 console.log(updatedState[action.payload.groupId].tasks.slice(0, getTaskIndex(state, action)))
 updatedState[action.payload.groupId].tasks = updatedState[action.payload.groupId].tasks.slice(0, action.payload.id)
 updatedState[action.payload.groupId].tasks = updatedState[action.payload.groupId].tasks.slice(action.payload.id + 1)
 console.log(updatedState)
 updatedState[action.payload.newGroupId].tasks[action.payload.index] = handler
 return updatedState
}
