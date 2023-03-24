import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-lsit')) ?? [] : [];

export const todos = writable(data);

// Auto save

todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem('st-todo-list', JSON.stringify(value));
	}
});

// Add

export const addTodo = () => {
	todos.update((currentTodos) => {
		return [...currentTodos, { id: uuidv4(), text: '', complete: false }];
	});
};

// Delete

export const deleteTodo = (id) => {
	todos.update((currentTodos) => {
		return currentTodos.filter((todo) => todo.id !== id);
	});
};

// Toggle

export const toggleComplete = (id) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
	});
};

// Edit

export const editTodo = (id, text) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});
	});
};
