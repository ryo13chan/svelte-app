<script lang="ts">
import type { Snippet } from 'svelte'

let {
  content,
}: {
  content?: Snippet
} = $props()
</script>

<div class="grid grid-cols-1 gap-8">
	{#if content}
		{@render content()}
	{/if}
</div>
