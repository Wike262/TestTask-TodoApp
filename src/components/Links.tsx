import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';

export interface Props {
	active: boolean;
	readonly children: React.ReactNode;
	onClick: () => void;
}

const Link = ({ active, children, onClick }: Props) => {
	const dispatch = useDispatch();
	return (
		<Button
			onClick={() => dispatch(onClick())}
			disabled={active}
			style={{
				marginLeft: '4px',
			}}
			color="secondary"
		>
			{children}
		</Button>
	);
};

export default Link;
