import { get } from '$lib/api'
import type { Todo } from '$lib/types/todo'
import type { User } from '$lib/types/user'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const userResponse = await get(`users/${params.id}`)
  const user: User = await userResponse.json()

  const userTodosResponse = await get(`users/${params.id}/todos`)
  const todos: Todo[] = await userTodosResponse.json()

  const userPostsResponse = await get(`users/${params.id}/posts`)
  const posts = await userPostsResponse.json()

  return {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'User List', href: '/user' },
      { title: user.name, href: `/user/${params.id}` },
    ],
    title: user.name,
    user,
    todos,
    posts,
  }
}
