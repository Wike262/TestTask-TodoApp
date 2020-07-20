import React from 'react';
import { connect, useDispatch } from 'react-redux';
import * as consts from '../constants';
import { Button } from 'reactstrap';
import style from '../style/Group.module.scss';
import cx from 'classnames';

const AddGroup = () => {
	let input = React.createRef<HTMLInputElement>();
	const dispatch = useDispatch();

	return (
		<div className={cx(style.Group, style.Group__Add)}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!input.current?.value.trim()) {
						return;
					}
					dispatch({ type: consts.ADD_GROUP, payload: { text: input.current.value } });
					input.current.value = '';
				}}
			>
				<input className="Input" ref={input} />
				<Button className="Button Button-Add" type="submit" color="info">
					Add Group
				</Button>
			</form>
		</div>
	);
};

export default connect()(AddGroup);
