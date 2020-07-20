import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'reactstrap';
import style from '../style/Tasks.module.scss';

export interface Props {
	completed: boolean;
	text: string;
	id: number;
	onToggle: () => void;
	onEdit: () => void;
	onDelete: () => void;
}

const Task = ({ onToggle, onEdit, onDelete, completed, text, id }: Props) => {
	const submitEdit = () => {
		onEdit();
		Array.from(
			document.getElementsByClassName(`Task-Text-${id}${text}`) as HTMLCollectionOf<HTMLElement>
		)[0].style.display = 'block';
		(document.getElementById(`${id}`) as HTMLElement).style.display = 'none';
		Array.from(document.getElementsByClassName(`Succes-${id}`) as HTMLCollectionOf<HTMLElement>)[0].style.display =
			'none';
	};

	const edit = () => {
		Array.from(
			document.getElementsByClassName(`Task-Text-${id}${text}`) as HTMLCollectionOf<HTMLElement>
		)[0].style.display = 'none';

		(document.getElementById(`${id}`) as HTMLElement).style.display = 'block';
		Array.from(document.getElementsByClassName(`Succes-${id}`) as HTMLCollectionOf<HTMLElement>)[0].style.display =
			'block';
	};

	return (
		<li className={style.Tasks__Item}>
			<p
				style={{
					textDecoration: completed ? 'line-through' : 'none',
				}}
				className={`Task-Text-${id}${text}`}
			>
				{text}
			</p>
			<div className={style.Tasks__Item__ButtonsWrapper}>
				<input
					className="Input Input-Task"
					id={`${id}`}
					onClick={(e) => {}}
					style={{ display: 'none' }}
					defaultValue={text}
				/>
				<Button className={`Succes Succes-${id}`} style={{ display: 'none' }} color="success" onClick={submitEdit}>
					<FaCheck />
				</Button>
				<Button onClick={edit}>
					<FaPencilAlt />
				</Button>
				<Button onClick={onDelete} color="danger">
					<FaTrash />
				</Button>
				<Button className="Toggle" onClick={onToggle}>
					{completed ? <FaCheck /> : ''}
				</Button>
			</div>
		</li>
	);
};

export default Task;
