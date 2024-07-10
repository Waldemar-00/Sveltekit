// import { error } from '@sveltejs/kit';
import { redirect, error } from '@sveltejs/kit';
export function load ( { cookies } )
{
  if ( !cookies.get( 'allowed' ) )
  {
    throw error(403, 'Forbidden')
    // throw redirect(303, '/welcome')
  }
}
export const actions = {
  default: async ( { cookies } ) =>
  {
    cookies.delete( 'allowed', { path: '/' } )
    throw redirect(303, '/welcome')
  }
}