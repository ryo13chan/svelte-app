<!-- <script lang="ts" context="module">
// prettier-ignore
type T = Record<string, unknown>
</script> -->

<script lang="ts" generics="T extends Record<string, unknown>">
import { Input } from '$lib/components/ui/input'
import { Label } from '$lib/components/ui/label'
import {
  type FormPathLeaves,
  type SuperForm,
  formFieldProxy,
} from 'sveltekit-superforms'
import RequiredBadge from './RequiredBadge.svelte'

let {
  form,
  field,
  type = 'text',
  label = '',
  placeholder = '',
  className = '',
  maxlength = undefined,
}: {
  form: SuperForm<T>
  field: FormPathLeaves<T>
  type?: 'text' | 'email' | 'password' | 'number' | 'hidden'
  label?: string
  placeholder?: string
  className?: string
  maxlength?: number
} = $props()

const { value, errors, constraints } = formFieldProxy(form, field)
</script>

<div class={className} class:hidden={type === 'hidden'}>
	<div class="flex items-center gap-2">
		{#if label}
			<Label for={field} class="font-bold text-base">{label}</Label>
		{/if}
		{#if $constraints?.required}
			<RequiredBadge />
		{/if}
	</div>
	<Input
		{type}
		id={field}
		name={field}
		aria-invalid={$errors ? 'true' : undefined}
		{placeholder}
		class="mt-2"
		bind:value={$value}
		{maxlength}
	/>
	{#if $errors}<span class="text-red-500">{$errors}</span>{/if}
</div>
