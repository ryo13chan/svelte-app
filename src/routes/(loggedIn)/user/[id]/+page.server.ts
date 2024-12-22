import { del, get } from '$lib/api'
import { deleteSchema } from '$lib/schemas/user'
import type { User } from '$lib/types/user'
import { redirect, setFlash } from 'sveltekit-flash-message/server'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import type { Actions, PageServerLoad } from './$types'

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
