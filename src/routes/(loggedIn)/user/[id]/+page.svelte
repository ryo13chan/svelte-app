<script lang="ts">
import { Button } from '$lib/components/ui/button'
import * as Tabs from '$lib/components/ui/tabs'
import UserPen from 'lucide-svelte/icons/user-pen'
import UserDetails from './UserDetails.svelte'
import UserPosts from './UserPosts.svelte'
import UserTodos from './UserTodos.svelte'

let { data } = $props()
</script>

<Tabs.Root value="details">
  <div class="flex justify-between mb-4">
    <Tabs.List>
      <Tabs.Trigger value="details">Details</Tabs.Trigger>
      <Tabs.Trigger value="todo">Todo</Tabs.Trigger>
      <Tabs.Trigger value="post">Post</Tabs.Trigger>
    </Tabs.List>
    <Button href={`/user/${data.user.id}/edit`}>
      <UserPen class="mr-2 w-4" />Edit
    </Button>
  </div>
  <Tabs.Content value="details">
    <UserDetails user={data.user} />
  </Tabs.Content>
  <Tabs.Content value="todo">
    <UserTodos todos={data.todos} />
  </Tabs.Content>
  <Tabs.Content value="post">
    <UserPosts posts={data.posts} />
  </Tabs.Content>
</Tabs.Root>