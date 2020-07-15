import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

const GroupControl = ({ editGroup, deleteGroup, group, history }) => {
 return (
  <div className="Tasks-Group">
   <h1 className="Tasks-GroupName">{`Group: ${group.text}`}</h1>
   <input
    id={`Group-${group.id}`}
    onClick={(e) => { }}
    style={{ display: "none", marginLeft: "20px" }}
    defaultValue={group.text}
   />
   <div className="Tasks-Item-ButtonsWrapper">
    <Button
     className={`Succes Group-${group.id}`}
     style={{ display: "none" }}
     color="success"
     onClick={(e) => {
      editGroup(group.id, document.getElementById(`Group-${group.id}`).value);
      document.getElementById(`Group-${group.id}`).style.display = "none";
      document.getElementsByClassName(`Group-${group.id}`)[0].style.display = "none";
     }}
    >
     <FaCheck />
    </Button>

    <Button
     onClick={(e) => {
      document.getElementById(`Group-${group.id}`).style.display = "block";
      document.getElementsByClassName(`Group-${group.id}`)[0].style.display = "block";
     }}
     style={{ marginLeft: "20px" }}
    >
     <FaPencilAlt />
    </Button>
    <Button onClick={() => { document.title = "Todo TestTask"; history.push('/'); deleteGroup(group.id) }} color="danger">
     <FaTrash />
    </Button>
   </div>
  </div>
 );
}

export default withRouter(GroupControl);