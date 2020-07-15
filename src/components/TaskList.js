import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleTask, editTask, deleteTask, groupId }) => {
 return (
  <ul>
   {tasks.map((task) => {
    return (
     <Task
      key={task.id}
      {...task}
      onToggle={() => toggleTask(task.id, groupId)}
      onDelete={() => deleteTask(task.id, groupId)}
      onEdit={() => {
       let text = document.getElementById(task.id).value;
       editTask(task.id, text, groupId);
      }}
     />
    )
   })}
  </ul>
 )
};

export default TaskList;