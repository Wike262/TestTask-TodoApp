import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";
import { Button } from 'reactstrap';

const AddTask = ({ dispatch, groupId }) => {
 let input
 return (
  <div>
   <form
    onSubmit={(e) => {
     e.preventDefault();
     if (!input.value.trim()) {
      return;
     }
     dispatch(addTask(input.value, groupId));
     input.value = "";
    }}
   >
    <input className="Input" ref={(node) => (input = node)} />
    <Button className="Button Button-Add" type="submit" color="info">Add Task</Button>
   </form>
  </div>
 )
};

export default connect()(AddTask);