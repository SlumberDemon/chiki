<script>
	import { addTodo } from '../../store/TodoStore';
</script>

<section class="flex items-center justify-between">
	<h3 class="text-5xl font-bold text-gray-three">Chiki</h3>
	<button
		type="button"
		on:click={addTodo}
		class="group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-lg font-semibold text-gray-five outline outline-2 outline-offset-2 outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five"
		>Add Task
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="ml-3 h-6 w-6 text-gray-five group-hover:text-green-five group-focus-visible:text-green-five"
			width="60"
			height="60"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="12" cy="12" r="9" />
			<line x1="9" y1="12" x2="15" y2="12" />
			<line x1="12" y1="9" x2="12" y2="15" />
		</svg></button
	>
</section>
