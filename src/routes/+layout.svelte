<script lang="ts">
import { page } from '$app/stores'
import { Toaster } from '$lib/components/ui/sonner'
import { toast } from 'svelte-sonner'
import { getFlash } from 'sveltekit-flash-message'
import '../app.css'

let { children } = $props()

const title = $derived(
  `${$page.data.title ? `${$page.data.title} | ` : ''}Svelte App`,
)

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

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Toaster position="top-right" richColors />
{@render children()}