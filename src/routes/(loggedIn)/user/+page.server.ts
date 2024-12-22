import { del, get } from '$lib/api'
import { deleteSchema } from '$lib/schemas/user'
import type { User } from '$lib/types/user'
import { redirect, setFlash } from 'sveltekit-flash-message/server'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import type { Actions, PageServerLoad } from './$types'

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

export const actions: Actions = {
  delete: async (event) => {
    const form = await superValidate(event, zod(deleteSchema))
    if (!form.valid) {
      return fail(400, { form })
    }

    const response = await del(`users/${form.data.id}`)

    if (response.status !== 200) {
      setFlash({ message: 'User deletion failed.', type: 'error' }, event)
      return fail(400, { form })
    }

    redirect({ message: 'User deleted successfully.', type: 'success' }, event)
  },
}
