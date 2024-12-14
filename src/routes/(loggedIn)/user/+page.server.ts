import { get } from '$lib/api'
import type { User } from '$lib/types/user'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const response = await get('users')
  const users: User[] = await response.json()

  return {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'User List', href: '/user' },
    ],
    title: 'User List',
    users,
  }
}
