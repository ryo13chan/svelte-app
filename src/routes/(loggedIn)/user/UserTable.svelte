<script lang="ts">
import Button from '$lib/components/ui/button/button.svelte'
import * as Table from '$lib/components/ui/table'
import type { User } from '$lib/types/user'
import Info from 'lucide-svelte/icons/info'
import Trash from 'lucide-svelte/icons/trash'

let { users }: { users: User[] } = $props()
</script>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head>ID</Table.Head>
      <Table.Head>Name</Table.Head>
      <Table.Head>UserName</Table.Head>
      <Table.Head>Email</Table.Head>
      <Table.Head>Actions</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each users as user}
      <Table.Row>
        <Table.Cell>{user.id}</Table.Cell>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.username}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>
          <Button >
            <Info class="mr-2 h-4 w-4" />
            Details
          </Button>
          <Button variant="destructive">
            <Trash class="mr-2 h-4 w-4" />
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>