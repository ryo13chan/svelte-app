<script lang="ts">
import { Button } from '$lib/components/ui/button'
import UserPen from 'lucide-svelte/icons/user-pen'
import UserDetails from './UserDetails.svelte'

let { data } = $props()
</script>

<div class="flex justify-end mb-4">
  <Button href={`/user/${data.user.id}/edit`}>
    <UserPen class="mr-2 w-4" />Edit
  </Button>
</div>
<UserDetails user={data.user} />