import React from 'react';
import { connect, useDispatch } from 'react-redux';
import * as consts from '../constants';

import { Button } from 'reactstrap';

export interface Props {
	groupId: number;
}

const AddTask = ({ groupId }: Props) => {
	let dispatch = useDispatch();
	let input = React.createRef<HTMLInputElement>();
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!input.current?.value.trim()) {
						return;
					}
					dispatch({ type: consts.ADD_TASK, payload: { text: input.current.value, groupId } });
					input.current.value = '';
				}}
			>
				<input className="Input" ref={input} />
				<Button className="Button Button-Add" type="submit" color="info">
					Add Task
				</Button>
			</form>
		</div>
	);
};

export default connect()(AddTask);
