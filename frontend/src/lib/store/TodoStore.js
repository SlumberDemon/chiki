// Add

export function addTodo() {
	fetch(`/api/todos?text=&complete=false`, { method: 'POST' });
	window.location.reload();
}

// Delete

export function deleteTodo(id) {
	fetch(`/api/todos?key=${id}`, { method: 'DELETE' });
	window.location.reload();
}

// Toggle

export async function toggleComplete(id) {
	const response = await fetch(`/api/todos/${id}`);
	const todo = await response.json();
	const newCompleteVal = !todo.complete;
	fetch(`/api/todos?key=${id}&complete=${newCompleteVal}&text=${todo.text}`, {
		method: 'PATCH'
	});
	window.location.reload();
}

// Edit

export async function editTodo(id, text) {
	const response = await fetch(`/api/todos/${id}`);
	const todo = await response.json();
	fetch(`/api/todos?key=${id}&text=${text}&complete=${todo.complete}`, { method: 'PATCH' });
}
