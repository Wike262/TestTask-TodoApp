import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Button } from "reactstrap";

const GroupControl = ({ editGroup, deleteGroup, group }) => {
 return (
  <div className="Group-Controls">
   <h1 className={`Group-Name Group-Name-${group.id}`}>{`Group: ${group.text}`}</h1>
   <div className="Group-Controls-ButtonsWrapper">
    <input
     className="Input"
     id={`Group-${group.id}`}
     onClick={(e) => { }}
     style={{ display: "none" }}
     defaultValue={group.text}
    />
    <Button
     className={`Succes Group-${group.id}`}
     style={{ display: "none" }}
     color="success"
     onClick={(e) => {
      editGroup(group.id, document.getElementById(`Group-${group.id}`).value);
      document.getElementsByClassName(`Group-Name-${group.id}`)[0].style.display = "block"
      document.getElementById(`Group-${group.id}`).style.display = "none";
      document.getElementsByClassName(`Group-${group.id}`)[0].style.display = "none";
     }}
    >
     <FaCheck />
    </Button>

    <Button
     onClick={(e) => {
      document.getElementsByClassName(`Group-Name-${group.id}`)[0].style.display = "none"
      document.getElementById(`Group-${group.id}`).style.display = "block";
      document.getElementsByClassName(`Group-${group.id}`)[0].style.display = "block";
     }}
    >
     <FaPencilAlt />
    </Button>
    <Button onClick={() => { deleteGroup(group.id) }} color="danger">
     <FaTrash />
    </Button>
   </div>
  </div>
 );
}

export default GroupControl;