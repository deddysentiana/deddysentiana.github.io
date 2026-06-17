<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import SocialFloating from '$lib/components/SocialFloating.svelte';
	
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
	let loading = $state(true);

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 1500);
	});
</script>

{#if loading}
	<div class="fixed inset-0 z-100 flex flex-col items-center justify-center gap-4 bg-white" out:fade={{ duration: 2000 }}>
		<div class="flex h-24 w-24 items-center justify-center rounded-full border-4 border-black text-4xl font-bold text-black shadow-xl">
			DS
		</div>
		<span class="text-2xl font-bold text-black">Yo!</span>
	</div>
{/if}

<main class="min-h-screen bg-background font-sans antialiased text-foreground">
  {@render children()}
</main>

<SocialFloating />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>