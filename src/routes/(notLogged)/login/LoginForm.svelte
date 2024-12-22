<script lang="ts">
import * as Card from '$lib/components/ui/card'
import * as Form from '$lib/components/ui/form'
import { Input } from '$lib/components/ui/input'
import type { LoginSchema } from '$lib/schemas/login'
import type { Infer, SuperValidated } from 'sveltekit-superforms'
import { superForm } from 'sveltekit-superforms'

let {
  data,
}: {
  data: SuperValidated<Infer<LoginSchema>>
} = $props()

const form = superForm(data)
const { form: formData, enhance } = form
</script>

<form method="POST" use:enhance>
  <Card.Root class="min-w-96">
    <Card.Header>
      <Card.Title>Login</Card.Title>
      <Card.Description>For login feature demo</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid items-center gap-4">
        <Form.Field {form} name="email">
          <Form.Control let:attrs>
            <Form.Label>Email</Form.Label>
            <Input {...attrs} bind:value={$formData.email} />
          </Form.Control>
          <Form.Description>Enter "test@test.com".</Form.Description>
          <Form.FieldErrors />
        </Form.Field>
        <Form.Field {form} name="password">
          <Form.Control let:attrs>
            <Form.Label>Password</Form.Label>
            <Input {...attrs} bind:value={$formData.password} type="password" />
          </Form.Control>
          <Form.Description>Enter "password".</Form.Description>
          <Form.FieldErrors />
        </Form.Field>
      </div>
    </Card.Content>
    <Card.Footer class="flex justify-end">
      <Form.Button>Login</Form.Button>
    </Card.Footer>
  </Card.Root>
</form>
