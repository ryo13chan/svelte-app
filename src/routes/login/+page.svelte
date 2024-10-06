<script lang="ts">
import Button from '$lib/components/ui/button/button.svelte'
import { Input } from '$lib/components/ui/input'
import { superForm } from 'sveltekit-superforms'
import type { PageData } from './$types'

let {
  data,
}: {
  data: PageData
} = $props()

const { form, errors, message } = superForm(data.form)
</script>

{#if $message}
  <div>{$message}</div>
{/if}

<form method="POST">
  <Input type="email" name="email" placeholder="email" class="max-w-xs mb-4" bind:value={$form.email} />
  <Input type="password" name="password" placeholder="password" class="max-w-xs mb-4" bind:value={$form.password} />
  {#if $errors.password}
  <div>{ $errors.password }</div>
  {/if}
  <Button type="submit">Submit</Button>
</form>