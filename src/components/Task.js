import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Button } from "reactstrap";


const Task = ({ onToggle, onEdit, onDelete, completed, text, id, index }) => {

 return (
  <li className="Tasks-Item"

  >
   <p style={{
    textDecoration: completed ? "line-through" : "none",
   }} className={`Task-Text-${id}${text}`}>{text}</p>

   <div className="Tasks-Item-ButtonsWrapper">
    <input
     className="Input Input-Task"
     id={id}
     onClick={(e) => { }}
     style={{ display: "none" }}
     defaultValue={text}
    />
    <Button
     className={`Succes Succes-${id}`}
     style={{ display: "none" }}
     color="success"
     onClick={(e) => {
      onEdit();
      document.getElementsByClassName(`Task-Text-${id}${text}`)[0].style.display = "block";
      document.getElementById(id).style.display = "none";
      document.getElementsByClassName(`Succes-${id}`)[0].style.display = "none";
     }}
    >
     <FaCheck />
    </Button>

    <Button
     onClick={(e) => {
      document.getElementsByClassName(`Task-Text-${id}${text}`)[0].style.display = "none";
      document.getElementById(id).style.display = "block";
      document.getElementsByClassName(`Succes-${id}`)[0].style.display = "block";
     }}
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
 )
}


export default Task;