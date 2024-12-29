<script lang="ts">
import { page } from '$app/stores'

const pathname = $derived($page.url.pathname)
const menus = [
  { key: 'user', label: 'User', href: '/user' },
  { key: 'post', label: 'Post', href: '/post' },
  { key: 'logout', label: 'Logout', href: '/logout' },
]
</script>

<div class="min-h-[calc(100vh-4rem)] min-w-48 border-r">
	<ul class="sticky top-20 px-4">
		{#each menus as menu}
			<li class="my-4">
				<a
					href={menu.href}
					class:font-bold={pathname.startsWith(menu.href)}
					data-sveltekit-preload-data={menu.href === '/logout' ? 'off' : 'hover'}>{menu.label}</a
				>
			</li>
		{/each}
	</ul>
</div>
