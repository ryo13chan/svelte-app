<script lang="ts">
import UserTable from './UserTable.svelte'

let { data } = $props()
</script>

<UserTable users={data.users} />