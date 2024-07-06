// @ts-nocheck
import { redirect, fail } from '@sveltejs/kit'
// import { PASS_PHRASE } from '$env/static/private';
import { env } from '$env/dynamic/private';
export function load ( { cookies } )
{
  if ( cookies.get( 'allowed' ) )
  {
    throw redirect(307, '/welcome/logged')
  }
}

export const actions = {
  default: async ({cookies, request}) =>
  {
    const data = await request.formData();
    // if ( data.get('passphrase') === PASS_PHRASE )
  if ( data.get('passphrase') === env.PASS_PHRASE )
    {
      cookies.set( 'allowed', 'true', { path: '/' } )
      throw redirect( 303, '/welcome/logged' )
    }
    return fail(403, {incorrect: true})
  }
}