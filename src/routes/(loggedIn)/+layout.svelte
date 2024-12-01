<script lang="ts">
import Footer from '$lib/components/Footer.svelte'
import Header from '$lib/components/Header.svelte'
import Sidebar from '$lib/components/Sidebar.svelte'

let { children } = $props()
</script>

<Header />
<div class="flex">
	<Sidebar />
	<div class="flex flex-1 flex-col overflow-auto">
		<div class="max-w-[100vw] p-8">
			{@render children()}
		</div>
		<Footer />
	</div>
</div>
