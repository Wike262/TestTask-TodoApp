import React from "react";
import AddGroup from "../containers/AddGroup";
import VisibleGroups from "../containers/VisibleGroups";

export default () => {
 return (
  <div className="Group-Container">
   <VisibleGroups />
   <AddGroup />
  </div>
 )
};