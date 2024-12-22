<script lang="ts">
import { applyAction, enhance } from '$app/forms'
import { Button, buttonVariants } from '$lib/components/ui/button'
import * as Dialog from '$lib/components/ui/dialog'
import Trash from 'lucide-svelte/icons/trash'

let {
  id,
}: {
  id: number
} = $props()

let open = $state(false)
</script>

<Dialog.Root bind:open={open}>
  <Dialog.Trigger class={buttonVariants({ variant: "destructive" })}>
    <Trash class="mr-2 w-4" />Delete
  </Dialog.Trigger>
  <Dialog.Content>
    <form
      method="POST"
      action="?/delete"
      use:enhance={() => {
				return async ({ result }) => {
					await applyAction(result)
					if (result.type !== 'failure') open = false
				}
			}}
    >
      <Dialog.Header>
        <Dialog.Title>Delete User</Dialog.Title>
        <Dialog.Description>You are about to delete the user.</Dialog.Description>
      </Dialog.Header>
      <Dialog.Footer>
        <Button type="submit" variant="destructive">Delete</Button>
      </Dialog.Footer>
      <input type="hidden" name="id" bind:value={id} />
    </form>
  </Dialog.Content>
</Dialog.Root>