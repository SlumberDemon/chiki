<script>
	import TodoInput from './TodoInput.svelte';

	import { onMount } from 'svelte';

	let todos = [];

	onMount(async () => {
		const data = await fetch(`/api/todos`);
		todos = await data.json();
	});
</script>

<section class="mt-8 space-y-4">
	{#each todos as todo}
		<TodoInput {todo} />
	{/each}
</section>
