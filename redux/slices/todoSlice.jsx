import { createSlice } from "@reduxjs/toolkit";

import { db } from '../../components/indexedDB/db'

export const todoSlice = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		addTodos: (state, action) => {
			const newPayload = action.payload;

			db.todos.add({
				id: newPayload.id,
                text: newPayload.todo, 
                date: newPayload.date, 
                tags: newPayload.tags, 
                isCompleted: newPayload.isCompleted,
                subtasks: newPayload.subtasks
            });

			return [
				...state,
				{
					id: newPayload.id,
					text: newPayload.todo,
					date: newPayload.date,
					tags: newPayload.tags,
					isCompleted: newPayload.isCompleted,
					subtasks: newPayload.subtasks,
				},
			];
		},
		completeTodos: (state, action) => {
			const newPayload = action.payload;
			const newState = [...state];
			newState[newPayload.index].isCompleted =
				!newState[newPayload.index].isCompleted;

				db.todos
				.where({todo: newState[newPayload.index].text})
				.modify({isCompleted: newState[newPayload.index].isCompleted})

			setTimeout(() => {
				return void [newState];
			}, 1000);
		},
		removeTodos: (state, action) => {
			const newPayload = action.payload;

			state.splice(newPayload.index, 1);
			return void [state];
		},
		addTasks: (state, action) => {
			const newPayload = action.payload;
			const newState = [...state];

			newState[newPayload.index].subtasks.push({
				text: newPayload.text,
				isCompleted: false,
			});

			return void [newState];
		},
		completeTasks: (state, action) => {
			const newPayload = action.payload;
			const newState = [...state];
			newState[newPayload.index].subtasks[newPayload.subtaskIndex].isCompleted =
				!newState[newPayload.index].subtasks[newPayload.subtaskIndex]
					.isCompleted;

			return void [newState];
		},
	},
});

export const { addTodos, completeTodos, removeTodos, addTasks, completeTasks } =
	todoSlice.actions;
export default todoSlice.reducer;