<script lang="ts">
import Button from '$lib/components/ui/button/button.svelte'
import { Checkbox } from '$lib/components/ui/checkbox'
import Label from '$lib/components/ui/label/label.svelte'
import type { Todo } from '$lib/types/todo'
import Trash from 'lucide-svelte/icons/trash'

let { todos }: { todos: Todo[] } = $props()
let localTodos = $state(todos)

const deleteTodo = (id: number) => {
  localTodos = localTodos.filter((todo) => todo.id !== id)
}
</script>

<div class="grid gap-4">
  {#each localTodos as todo}
    <div class="flex justify-between border border-gray-300 p-4 rounded-md" class:bg-gray-200={todo.completed}>
      <div class="flex gap-4 items-center">
        <Checkbox id={String(todo.id)} bind:checked={todo.completed} />
        <Label for={String(todo.id)}>
          <span class:line-through={todo.completed}>{todo.title}</span>
        </Label>
      </div>
      <Button variant="outline" size="icon" onclick={() => deleteTodo(todo.id)}>
        <Trash class="w-4" />
      </Button>
    </div>
  {/each}
</div>
