import React from 'react';
import AddGroup from '../containers/AddGroup';
import VisibleGroups from '../containers/VisibleGroups';
import style from '../style/Group.module.scss';
export default () => {
	return (
		<div className={style.Group__Container}>
			<VisibleGroups />
			<AddGroup />
		</div>
	);
};
