import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
  cookies.delete('logged_in', { path: '/' })
  redirect(302, '/login')
}
