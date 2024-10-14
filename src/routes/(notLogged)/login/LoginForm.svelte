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
      <Card.Title>ログイン</Card.Title>
      <Card.Description>ログイン機能のデモ用</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid items-center gap-4">
        <Form.Field {form} name="email">
          <Form.Control let:attrs>
            <Form.Label>メールアドレス</Form.Label>
            <Input {...attrs} bind:value={$formData.email} />
          </Form.Control>
          <Form.Description>メールアドレスの形式</Form.Description>
          <Form.FieldErrors />
        </Form.Field>
        <Form.Field {form} name="password">
          <Form.Control let:attrs>
            <Form.Label>パスワード</Form.Label>
            <Input {...attrs} bind:value={$formData.password} type="password" />
          </Form.Control>
          <Form.Description>8文字以上</Form.Description>
          <Form.FieldErrors />
        </Form.Field>
      </div>
    </Card.Content>
    <Card.Footer class="flex justify-end">
      <Form.Button>ログイン</Form.Button>
    </Card.Footer>
  </Card.Root>
</form>
