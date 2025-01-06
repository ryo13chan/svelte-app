import { get } from '$lib/api'
import type { User } from '$lib/types/user'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const response = await get(`users/${params.id}`)
  const user: User = await response.json()

  return {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'User List', href: '/user' },
      { title: user.name, href: `/user/${params.id}` },
    ],
    title: user.name,
    user,
  }
}
