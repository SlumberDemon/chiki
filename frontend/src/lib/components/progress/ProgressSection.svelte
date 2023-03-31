<script>
	import { onMount } from 'svelte';
	import ProgressBar from './ProgressBar.svelte';

	let todos = [];
	let totalCount = '';
	let progressPercentage = '';
	let completePercentage = '';

	onMount(async () => {
		const data = await fetch(`/api/todos`);
		todos = await data.json();

		totalCount = todos.length;
		const complateCount = todos.filter((todo) => todo.complete).length;
		const progressCount = todos.filter((todo) => !todo.complete).length;
		completePercentage = Math.round((complateCount / totalCount) * 100) || 0;
		progressPercentage = Math.round((progressCount / totalCount) * 100) || 0;
	});
</script>

<section class="mt-10">
	<h3 class="text-gray-three text-xl font-bold">Tasks: {totalCount}</h3>
	<div class="mt-8 space-y-8">
		<ProgressBar title="In Progress" percentage={progressPercentage} />
		<ProgressBar title="Complete" percentage={completePercentage} />
	</div>
</section>
