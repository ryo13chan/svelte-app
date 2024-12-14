<script lang="ts">
import { page } from '$app/stores'
import Footer from '$lib/components/Footer.svelte'
import Header from '$lib/components/Header.svelte'
import Sidebar from '$lib/components/Sidebar.svelte'
import * as Breadcrumb from '$lib/components/ui/breadcrumb'

let { children } = $props()

const breadcrumbs = $derived($page.data.breadcrumbs)

const title = $derived($page.data.title)
</script>

<Header />
<div class="flex">
	<Sidebar />
	<div class="flex flex-1 flex-col overflow-auto">
		<div class="max-w-[100vw] px-8 py-4">
			{#if breadcrumbs}
				<div class="mb-4">
					<Breadcrumb.Root>
						<Breadcrumb.List>
							{#each breadcrumbs as breadcrumb, i}
								{#if i > 0}
									<Breadcrumb.Separator />
								{/if}
								<Breadcrumb.Item>
									<Breadcrumb.Link href={breadcrumb.href}>{breadcrumb.title}</Breadcrumb.Link>
								</Breadcrumb.Item>
							{/each}
						</Breadcrumb.List>
					</Breadcrumb.Root>
				</div>
			{/if}
			{#if title}
				<h2 class="text-3xl font-bold mb-4">{title}</h2>
			{/if}
			{@render children()}
		</div>
		<Footer />
	</div>
</div>
