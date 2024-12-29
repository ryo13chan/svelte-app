import { post } from '$lib/api'
import { registerSchema } from '$lib/schemas/user'
import { fail } from '@sveltejs/kit'
import { redirect, setFlash } from 'sveltekit-flash-message/server'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(registerSchema))

  return {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'User List', href: '/user' },
      { title: 'User Register', href: '/user/register' },
    ],
    title: 'User Register',
    form,
  }
}

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(registerSchema))
    if (!form.valid) {
      return fail(400, { form })
    }

    console.log(form.data)
    const response = await post('users', form.data)

    if (response.status !== 201) {
      setFlash({ message: 'User registration failed.', type: 'error' }, event)
      return fail(400, { form })
    }

    return redirect(
      '/user',
      { message: 'User registered successfully.', type: 'success' },
      event,
    )
  },
}
