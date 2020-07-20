import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';
import { useDispatch } from 'react-redux';
import style from '../style/Tasks.module.scss';

const getListStyle = (isDraggingOver: boolean) => ({
	background: isDraggingOver ? 'lightgrey' : '',
	padding: 8,
});

export interface Props {
	tasks: Array<{ id: number; text: string; completed: boolean }>;
	groupId: number;
	groupIndex: number;
	toggleTask: (id: number, groupId: number) => void;
	editTask: (id: number, text: string, groupId: number) => void;
	deleteTask: (id: number, groupId: number) => void;
}

const TaskList = ({ tasks, toggleTask, editTask, deleteTask, groupId, groupIndex }: Props) => {
	const dispatch = useDispatch();
	return (
		<div className={style.Tasks__Wrapper}>
			<Droppable droppableId={`Group-${groupIndex}-Tasks-${groupIndex}`} type="Tasks">
				{(provided, snapshot) => (
					<div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
						{tasks.map((task, index) => {
							return (
								<Draggable key={task.id} draggableId={`Group-${groupIndex}-Task-${task.id}`} index={index}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											style={getListStyle(snapshot.isDragging)}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<Task
												key={task.id}
												id={task.id}
												completed={task.completed}
												text={task.text}
												onToggle={() => dispatch(toggleTask(task.id, groupId))}
												onDelete={() => dispatch(deleteTask(task.id, groupId))}
												onEdit={() => {
													let text = (document.getElementById(`${task.id}`) as HTMLInputElement).value;
													dispatch(editTask(task.id, text, groupId));
												}}
											/>
										</div>
									)}
								</Draggable>
							);
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TaskList;
