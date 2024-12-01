<script lang="ts">
import { page } from '$app/stores'
import { Toaster } from '$lib/components/ui/sonner'
import { toast } from 'svelte-sonner'
import { getFlash } from 'sveltekit-flash-message'
import '../app.css'

let { children } = $props()

const flash = getFlash(page)
$effect(() => {
  if (!$flash) return
  switch ($flash.type) {
    case 'success':
      toast.success($flash.message)
      break
    case 'error':
      toast.error($flash.message)
      break
    default:
      break
  }
})
</script>


<Toaster position="top-right" />
{@render children()}