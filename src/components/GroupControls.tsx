import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import styles from '../style/Group.module.scss';

export interface Props {
	editGroup: (id: number, text: string) => void;
	deleteGroup: (id: number) => void;
	group: {
		id: number;
		text: string;
	};
}

function GroupControl({ group, editGroup, deleteGroup }: Props) {
	const dispatch = useDispatch();
	function submitEdit(id: number) {
		dispatch(editGroup(id, (document.getElementById(`Group-${group.id}`) as HTMLInputElement).value));
		Array.from(
			document.getElementsByClassName(`Group-Name-${group.id}`) as HTMLCollectionOf<HTMLElement>
		)[0].style.display = 'block';
		(document.getElementById(`Group-${group.id}`) as HTMLInputElement).style.display = 'none';
		Array.from(document.getElementsByClassName(`Group-${group.id}`) as HTMLCollectionOf<HTMLElement>)[0].style.display =
			'none';
	}

	function edit() {
		Array.from(
			document.getElementsByClassName(`Group-Name-${group.id}`) as HTMLCollectionOf<HTMLElement>
		)[0].style.display = 'none';
		(document.getElementById(`Group-${group.id}`) as HTMLInputElement).style.display = 'block';
		Array.from(document.getElementsByClassName(`Group-${group.id}`) as HTMLCollectionOf<HTMLElement>)[0].style.display =
			'block';
	}

	return (
		<div className={styles.Group__Controls}>
			<h1 className={`${styles.Group__Name} Group-Name-${group.id}`}>{`Group: ${group.text}`}</h1>
			<div className={styles.Group__Controls__ButtonsWrapper}>
				<input
					className="Input"
					id={`Group-${group.id}`}
					onClick={(e) => {}}
					style={{ display: 'none' }}
					defaultValue={group.text}
				/>
				<Button
					className={`Succes Group-${group.id}`}
					color="success"
					style={{ display: 'none' }}
					onClick={() => {
						submitEdit(group.id);
					}}
				>
					<FaCheck />
				</Button>

				<Button
					onClick={() => {
						edit();
					}}
				>
					<FaPencilAlt />
				</Button>
				<Button
					onClick={() => {
						dispatch(deleteGroup(group.id));
					}}
					color="danger"
				>
					<FaTrash />
				</Button>
			</div>
		</div>
	);
}

export default GroupControl;
