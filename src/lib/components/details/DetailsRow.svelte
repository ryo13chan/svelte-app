<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		title,
		value,
		content
	}: {
		title: string
		value?: string | number | boolean
		content?: Snippet
	} = $props()
</script>

<div class="grid grid-cols-1 gap-2">
	<div class="font-bold">{title}</div>
	{#if content}
		{@render content()}
	{:else if value}
		<div>{value}</div>
	{:else}
		<div>-</div>
	{/if}
</div>
