import React from 'react';
import Group from './Group';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const getListStyle = (isDraggingOver: boolean) => ({
	background: isDraggingOver ? 'lightgrey' : '',
	padding: 8,
	display: 'flex',
});

const getItemStyle = (isDragging: boolean, draggableStyle: any) =>
	({
		userSelect: 'none',
		padding: 8 * 2,
		margin: `0 0 ${8}px 0`,
		...draggableStyle,
	} as React.CSSProperties);

export interface Props {
	groups: Array<{ id: number }>;
}

const Groups = ({ groups }: Props) => {
	return (
		<Droppable droppableId="Groups" type="app" direction="horizontal">
			{(provided, snapshot) => (
				<div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
					{groups.map((item, index) => {
						return (
							<Draggable key={item.id} draggableId={`Group-${item.id}`} index={index}>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
									>
										<Group index={index} id={item.id} {...provided.dragHandleProps} />
									</div>
								)}
							</Draggable>
						);
					})}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};

export default Groups;
