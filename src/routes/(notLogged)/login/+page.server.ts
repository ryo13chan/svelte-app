import { loginSchema } from '$lib/schemas/login'
import { fail } from '@sveltejs/kit'
import { redirect, setFlash } from 'sveltekit-flash-message/server'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(loginSchema))

  return { form }
}

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginSchema))
    if (!form.valid) {
      return fail(400, { form })
    }

    // ログイン処理

    if (
      form.data.email !== 'test@test.com' ||
      form.data.password !== 'password'
    ) {
      setFlash({ message: 'Login failed.', type: 'error' }, event)
      return fail(400, { form })
    }

    event.cookies.set('logged_in', 'true', {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
      secure: true,
      path: '/',
    })

    return redirect(
      '/',
      { message: 'Login successful.', type: 'success' },
      event,
    )
  },
}
