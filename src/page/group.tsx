import React from 'react';
import AddTask from '../containers/AddTask';
import VisibleTaskList from '../containers/VisibleTaskList';
import Filters from '../components/Filters';
import GroupControl from '../containers/GroupControl';
import style from '../style/Tasks.module.scss';

const GroupPage = (props: any) => {
	document.title = `Group: ${props.location.state.groupName}`;
	return (
		<>
			<div className={style.Tasks}>
				<div className="row">
					<div className="GoBackLink-Wrapper"></div>
					<GroupControl groupId={props.location.state.groupId} />
				</div>
				<AddTask groupId={props.location.state.groupId} />
			</div>
		</>
	);
};

export default GroupPage;
