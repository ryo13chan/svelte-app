<script lang="ts">
import UserEditForm from './UserEditForm.svelte'

let { data } = $props()
</script>

<UserEditForm data={data.form} user={data.user} />