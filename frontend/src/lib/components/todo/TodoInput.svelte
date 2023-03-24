<script>
	import { deleteTodo, toggleComplete, editTodo } from '../../store/TodoStore';

	export let todo;

	$: completeClass = todo.complete ? 'bg-green-three' : 'bg-leaf-one';
</script>

<div class="flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-5">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${todo.id}-checkbox`} class="sr-only">Complete todo</label>
		<input
			id={`${todo.id}-checkbox`}
			type="checkbox"
			checked={todo.complete}
			on:change={() => toggleComplete(todo.id)}
			class="h-4 w-4 rounded border border-gray-three bg-cream-four text-green-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five"
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit todo</label>
		<input
			id={`${todo.id}-text`}
			type="text"
			placeholder="Enter a todo"
			value={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}
			class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
		/>
		<span
			class="{completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-gray-five md:block"
		>
			{todo.complete ? 'Complete' : 'In Progress'}
		</span>
	</div>
	<button
		type="button"
		on:click={() => deleteTodo(todo.id)}
		class="group ml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five"
		><span class="sr-only">Delete Todo</span><svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 text-steel-three group-hover:text-gray-five"
			width="60"
			height="60"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="4" y1="7" x2="20" y2="7" />
			<line x1="10" y1="11" x2="10" y2="17" />
			<line x1="14" y1="11" x2="14" y2="17" />
			<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
			<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
		</svg></button
	>
</div>
