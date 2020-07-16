import React, { useRef } from "react";
import { connect } from "react-redux";
import { addGroup } from "../actions";
import { Button } from 'reactstrap';

const AddGroup = ({ dispatch }) => {
 let input = useRef(null);

 return (
  <div className="Group Group-Add">
   <form
    onSubmit={(e) => {
     e.preventDefault();
     if (!input.value.trim()) {
      return;
     }
     dispatch(addGroup(input.value));
     input.value = "";
    }}
   >
    <input className="Input" ref={(node) => (input = node)} />
    <Button className="Button Button-Add" type="submit" color="info">Add Group</Button>
   </form>
  </div>
 );
};

export default connect()(AddGroup);