<script lang="ts">
import { Button } from '$lib/components/ui/button'

let {
  label,
  className = '',
  formaction = undefined,
  disabled = false,
  hasValidationError = false,
}: {
  label: string
  className?: string
  formaction?: string
  disabled?: boolean
  hasValidationError?: boolean
} = $props()
</script>

<div class="flex items-center gap-4">
	<Button class={className} {formaction} {disabled} type="submit">{label}</Button>
	{#if hasValidationError}
		<span class="text-red-500">There are errors in the input fields.</span>
	{/if}
</div>
