<script>
	import AddTodoSection from '../lib/components/todo/AddTodoSection.svelte';
	import TodoSection from '../lib/components/todo/TodoSection.svelte';
</script>

<div
	class="md: bg-cream-four selection:bg-green-two md:bg-olive-one min-h-screen p-0 py-24 drop-shadow-md md:px-8"
>
	<main
		class="bg-cream-four md:outline-cream-four mx-auto min-h-screen max-w-none rounded-none px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8"
	>
		<div class="mt-10">
			<AddTodoSection />
			<TodoSection />
			<!-- -<ProgressSection /> -->
		</div>
	</main>
</div>
