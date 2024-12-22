<script lang="ts">
import { Button } from '$lib/components/ui/button'
import UserPlus from 'lucide-svelte/icons/user-plus'
import UserTable from './UserTable.svelte'

let { data } = $props()
</script>

<div class="flex justify-end mb-4">
  <Button href="/user/register">
    <UserPlus class="mr-2 w-4" />Register
  </Button>
</div>
<UserTable users={data.users} />