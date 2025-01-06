<script lang="ts">
import { enhance } from '$app/forms'
import DetailsRow from '$lib/components/details/DetailsRow.svelte'
import SubmitButton from '$lib/components/form/SubmitButton.svelte'
import TextInput from '$lib/components/form/TextInput.svelte'
import Label from '$lib/components/ui/label/label.svelte'
import type { EditSchema } from '$lib/schemas/user'
import type { User } from '$lib/types/user'
import {
  type Infer,
  type SuperValidated,
  superForm,
} from 'sveltekit-superforms'

let {
  data,
  user,
}: {
  data: SuperValidated<Infer<EditSchema>>
  user: User
} = $props()

const form = superForm(data)
const { errors } = form
</script>

<form method="POST" use:enhance class="max-w-[500px]">
  <div class="mb-8 flex flex-col gap-8">
    <DetailsRow title="ID" value={user.id}  />
    <TextInput form={form} field="name" label="Name" placeholder="Name" />
    <TextInput form={form} field="username" label="UserName" placeholder="UserName" />
    <TextInput form={form} field="email" type="email" label="Email" placeholder="Email" />
    <div>
      <Label class="font-bold text-base">Address</Label>
      <div class="grid grid-cols-2 gap-x-4 gap-y-2">
        <TextInput form={form} field="street" placeholder="Street" />
        <TextInput form={form} field="suite" placeholder="Suite" />
        <TextInput form={form} field="city" placeholder="City" />
        <TextInput form={form} field="zipcode" placeholder="ZipCode" />
        <TextInput form={form} field="lat" placeholder="Lat" />
        <TextInput form={form} field="lng" placeholder="Lng" />
      </div>
    </div>
    <TextInput form={form} field="phone" label="Phone" placeholder="Phone" />
    <TextInput form={form} field="website" label="Website" placeholder="Website" />
    <div>
      <Label class="font-bold text-base">Company</Label>
      <TextInput form={form} field="companyName" placeholder="Name" />
      <TextInput form={form} field="companyCatchPhrase" placeholder="CatchPhrase" />
      <TextInput form={form} field="companyBs" placeholder="BS" />
    </div>

  </div>
  <SubmitButton label="Edit" hasValidationError={$errors && Object.keys($errors).length > 0} />
</form>