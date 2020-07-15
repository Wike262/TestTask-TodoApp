import { connect } from "react-redux";
import { toggleTask } from "../actions";
import { editTask } from "../actions";
import { deleteTask } from "../actions";
import TaskList from "../components/TaskList";
import { VisibilityFilters } from '../actions'

const getVisibleTasks = (tasks, filter) => {
 console.log(tasks)
 switch (filter) {
  case VisibilityFilters.SHOW_ALL:
   return tasks
  case VisibilityFilters.SHOW_COMPLETED:
   return tasks.filter(t => t.completed)
  case VisibilityFilters.SHOW_ACTIVE:
   return tasks.filter(t => !t.completed)
  default:
   throw new Error('Unknown filter: ' + filter)
 }
}

const getTasks = (state, id) => {
 return state.groups.find((item) => item.id === id).tasks
}

const mapStateToProps = (state, ownProp) => ({ tasks: getVisibleTasks(getTasks(state, ownProp.groupId), state.visibilityFilter), groupId: ownProp.groupId });

const mapDispatchToProps = (dispatch) => ({
 toggleTask: (id, groupId) => dispatch(toggleTask(id, groupId)),
 editTask: (id, text, groupId) => dispatch(editTask(id, text, groupId)),
 deleteTask: (id, groupId) => dispatch(deleteTask(id, groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);