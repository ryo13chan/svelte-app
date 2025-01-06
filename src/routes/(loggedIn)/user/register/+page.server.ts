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

    const body = {
      name: form.data.name,
      username: form.data.username,
      email: form.data.email,
      address: {
        street: form.data.street,
        suite: form.data.suite,
        city: form.data.city,
        zipcode: form.data.zipcode,
        geo: {
          lat: form.data.lat,
          lng: form.data.lng,
        },
      },
      phone: form.data.phone,
      website: form.data.website,
      company: {
        name: form.data.companyName,
        catchPhrase: form.data.companyCatchPhrase,
        bs: form.data.companyBs,
      },
    }
    const response = await post('users', body)

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
