import React from 'react';
import FilterLink from '../containers/FilterLink';
import * as consts from '../constants';
export interface Props {
	groupId: number;
}
const Filters = ({ groupId }: Props) => (
	<div className="FitersButtons-Wrapper">
		<span>Show: </span>
		<FilterLink groupId={groupId} filter={consts.SHOW_ALL}>
			All
		</FilterLink>
		<FilterLink groupId={groupId} filter={consts.SHOW_ACTIVE}>
			Active
		</FilterLink>
		<FilterLink groupId={groupId} filter={consts.SHOW_COMPLETED}>
			Completed
		</FilterLink>
	</div>
);

export default Filters;
