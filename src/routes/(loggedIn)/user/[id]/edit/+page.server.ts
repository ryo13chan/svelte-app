import { get, put } from '$lib/api'
import { editSchema } from '$lib/schemas/user'
import type { User } from '$lib/types/user'
import { redirect, setFlash } from 'sveltekit-flash-message/server'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const response = await get(`users/${params.id}`)
  const user: User = await response.json()

  const userFormData = {
    name: user.name,
    username: user.username,
    email: user.email,
    street: user.address.street,
    suite: user.address.suite,
    city: user.address.city,
    zipcode: user.address.zipcode,
    lat: user.address.geo.lat,
    lng: user.address.geo.lng,
    phone: user.phone,
    website: user.website,
    companyName: user.company.name,
    companyCatchPhrase: user.company.catchPhrase,
    companyBs: user.company.bs,
  }
  const form = await superValidate(userFormData, zod(editSchema))

  return {
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'User List', href: '/user' },
      { title: user.name, href: `/user/${params.id}` },
      { title: 'User Edit', href: `/user/${params.id}/edit` },
    ],
    title: 'User Edit',
    user,
    form,
  }
}

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(editSchema))
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
    const response = await put(`users/${event.params.id}`, body)

    if (response.status !== 200) {
      setFlash({ message: 'User editing failed.', type: 'error' }, event)
      return fail(400, { form })
    }

    return redirect(
      `/user/${event.params.id}`,
      { message: 'User edited successfully.', type: 'success' },
      event,
    )
  },
}
