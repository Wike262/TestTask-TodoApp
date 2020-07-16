import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";

const getListStyle = isDraggingOver => ({
 background: isDraggingOver ? "lightgrey" : "",
 padding: 8,
});

const TaskList = ({ tasks, toggleTask, editTask, deleteTask, groupId, groupIndex }) => {
 return (
  <Droppable droppableId={`Group-${groupIndex}-Tasks-${groupIndex}`} type='Tasks'>
   {(provided, snapshot) => (
    <div
     ref={provided.innerRef}
     style={getListStyle(snapshot.isDraggingOver)}
     {...provided.droppableProps}
     {...provided.dragHandleProps}
    >
     {tasks.map((task, index) => {
      return (
       <Draggable draggableId={`Group-${groupIndex}-Task-${index}`} index={index} >
        {(provided, snapshot) => (
         <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
         >
          <Task
           key={task.id}
           index={index}
           {...task}
           onToggle={() => toggleTask(task.id, groupId)}
           onDelete={() => deleteTask(task.id, groupId)}
           onEdit={() => {
            let text = document.getElementById(task.id).value;
            editTask(task.id, text, groupId);
           }}
          />
         </div>
        )}
       </Draggable>
      )
     })}
     {provided.placeholder}
    </div>
   )}

  </Droppable>
 )
};

export default TaskList;