import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ resolve, event }) => {
  const cookieLoggedIn = event.cookies.get('logged_in')
  const loggedIn = cookieLoggedIn === 'true'

  // ログインが必要な画面で未ログイン
  if (!loggedIn && event.route.id?.startsWith('/(loggedIn)')) {
    return Response.redirect(`${event.url.origin}/login`, 302)
  }
  // ログイン不要な画面でログイン済み
  if (loggedIn && event.route.id?.startsWith('/(notLogged)')) {
    return Response.redirect(`${event.url.origin}/`, 302)
  }

  return await resolve(event)
}
