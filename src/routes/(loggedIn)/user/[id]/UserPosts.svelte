<script lang="ts">
import type { Post } from '$lib/types/post'

let { posts }: { posts: Post[] } = $props()
</script>

{ posts }