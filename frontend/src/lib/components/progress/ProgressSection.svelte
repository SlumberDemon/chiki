<script>
	import ProgressBar from './ProgressBar.svelte';

	import { todos } from '../../store/TodoStore';

	export let completePercentage = 0;
	export let progressPercentage = 0;

	$: totalCount = $todos.length;
	$: complateCount = $todos.filter((todo) => todo.complete).length;
	$: progressCount = $todos.filter((todo) => !todo.complete).length;
	$: completePercentage = Math.round((complateCount / totalCount) * 100) || 0;
	$: progressPercentage = Math.round((progressCount / totalCount) * 100) || 0;
</script>

<section class="mt-10">
	<h3 class="text-xl font-bold text-gray-three">Tasks: {totalCount}</h3>
	<div class="mt-8 space-y-8">
		<ProgressBar title="In Progress" percentage={progressPercentage} />
		<ProgressBar title="Complete" percentage={completePercentage} />
	</div>
</section>
