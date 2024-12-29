<script lang="ts">
import { enhance } from '$app/forms'
import SubmitButton from '$lib/components/form/SubmitButton.svelte'
import TextInput from '$lib/components/form/TextInput.svelte'
import type { RegisterSchema } from '$lib/schemas/user'
import {
  type Infer,
  type SuperValidated,
  superForm,
} from 'sveltekit-superforms'

let {
  data,
}: {
  data: SuperValidated<Infer<RegisterSchema>>
} = $props()

const form = superForm(data)
const { errors } = form
</script>

<form method="POST" use:enhance class="max-w-[500px]">
  <div class="mb-8 flex flex-col gap-8">
    <TextInput form={form} field="name" label="Name" placeholder="Name" />
    <TextInput form={form} field="username" label="UserName" placeholder="UserName" />
    <!-- TODO: 項目追加 -->
  </div>
  <SubmitButton label="Register" hasValidationError={$errors && Object.keys($errors).length > 0} />
</form>