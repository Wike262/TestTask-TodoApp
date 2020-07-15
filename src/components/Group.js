import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Group = ({ groups }) => {
 let group = groups.groups
 return (
  <ul className="Group-List">
   {group.map((item) => {
    return (
     <li key={item.id} className="Group-Item">
      <Link to={{ pathname: `/${item.id}`, state: { groupId: item.id, groupName: item.text } }}  >
       {item.text} <FaAngleRight />
      </Link>
     </li>
    )
   })
   }
  </ul>)
}

export default Group;
