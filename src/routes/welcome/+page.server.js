// @ts-nocheck
import { redirect, fail } from '@sveltejs/kit'
import { _PASS_PHRASE } from '$env/static/private';
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
    if ( data.get('passphrase') === _PASS_PHRASE )
    {
      cookies.set( 'allowed', 'true', { path: '/' } )
      throw redirect( 303, '/welcome/logged' )
    }
    return fail(403, {incorrect: true})
  }
}