import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Button } from "reactstrap";

const Task = ({ onToggle, onEdit, onDelete, completed, text, id }) => (
 <li className="Tasks-Item"
  style={{
   textDecoration: completed ? "line-through" : "none",
  }}
 >
  {text}
  <input
   id={id}
   onClick={(e) => { }}
   style={{ display: "none", marginLeft: "20px" }}
   defaultValue={text}
  />
  <div className="Tasks-Item-ButtonsWrapper">
   <Button
    className={`Succes Succes-${id}`}
    style={{ display: "none" }}
    color="success"
    onClick={(e) => {
     onEdit();
     document.getElementById(id).style.display = "none";
     document.getElementsByClassName(`Succes-${id}`)[0].style.display = "none";
    }}
   >
    <FaCheck />
   </Button>

   <Button
    onClick={(e) => {
     document.getElementById(id).style.display = "block";
     document.getElementsByClassName(`Succes-${id}`)[0].style.display = "block";
    }}
    style={{ marginLeft: "20px" }}
   >
    <FaPencilAlt />
   </Button>
   <Button onClick={onDelete} color="danger">
    <FaTrash />
   </Button>
   <Button className="Toggle" onClick={onToggle}>
    {completed ? <FaCheck /> : ""}
   </Button>
  </div>
 </li>
);

export default Task;