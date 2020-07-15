import React from "react";
import AddTask from "../containers/AddTask";
import VisibleTaskList from "../containers/VisibleTaskList";
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { Button } from "reactstrap";
import Filters from '../components/Filters'
import GroupControl from '../containers/GroupControl'

const GroupPage = (props) => {

 document.title = `Group: ${props.location.state.groupName}`
 return (
  <>
   <div className="Tasks">
    <div className="row">
     <div className="GoBackLink-Wrapper"><Button className="GoBackLink" color="secondary"><Link onClick={() => document.title = "Todo TestTask"} to="/"><FaAngleLeft /></Link> </Button></div>
     <GroupControl groupId={props.location.state.groupId} />
    </div>
    <AddTask groupId={props.location.state.groupId} />
    <VisibleTaskList groupId={props.location.state.groupId} />
   </div>
   <Filters />
  </>
 )
};

export default GroupPage;