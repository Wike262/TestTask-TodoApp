import React from 'react';
import GroupControls from '../containers/GroupControl';
import AddTask from '../containers/AddTask';
import TasksList from '../containers/VisibleTaskList';
import Filters from './Filters';
import styles from '../style/Group.module.scss';

export interface Props {
	index: number;
	id: number;
}

const Group = ({ index, id }: Props) => {
	return (
		<div key={id} className={styles.Group}>
			<GroupControls groupId={id} />
			<AddTask groupId={id} />
			<TasksList groupId={id} groupIndex={index} />
			<Filters groupId={id} />
		</div>
	);
};

export default Group;
