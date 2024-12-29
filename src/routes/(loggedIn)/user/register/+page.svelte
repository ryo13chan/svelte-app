<script lang="ts">
import UserRegisterForm from './UserRegisterForm.svelte'

let { data } = $props()
</script>

<UserRegisterForm data={data.form} />