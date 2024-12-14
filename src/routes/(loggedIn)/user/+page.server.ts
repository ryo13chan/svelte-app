import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  return {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'User List', href: '/user' },
    ],
    title: 'User List',
  }
}
