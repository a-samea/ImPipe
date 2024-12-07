<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>


<template>
	<section class="flex items-center h-full sm:p-16">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
			<span class="dark:text-gray-400 mi text-9xl text-blue-950">sentiment_dissatisfied</span>
			<p class="text-3xl">Looks like ourdzxc services are currently offline</p>
			<RouterLink rel="noopener noreferrer" to="/" class="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</RouterLink>
		</div>
	</section>
</template>


