import React from "react";
import GroupControls from '../containers/GroupControl'
import AddTask from '../containers/AddTask'
import TasksList from '../containers/VisibleTaskList'

const Group = ({ index, id }) => {
 return (
  <div key={index} className="Group">
   <GroupControls groupId={id} />
   <AddTask groupId={id} />
   <TasksList groupId={id} groupIndex={index} />
  </div>
 )
};

export default Group;