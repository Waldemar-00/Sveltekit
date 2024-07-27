// @ts-nocheck
// import { error } from '@sveltejs/kit';
import { redirect, error } from '@sveltejs/kit';
export function load ( event )
{
  if ( !event.cookies.get( 'allowed' ) )
  {
    throw error(403, 'Forbidden')
    // throw redirect(303, '/welcome')
  }
  const message = event.locals.information =  "The user has logged!"
  return {
    information:  message
  }
}
export const actions = {
  default: async ( event ) =>
  {
    event.cookies.delete( 'allowed', { path: '/' } )
    event.locals.information = 'The user has left the page!'
    throw redirect(303, '/welcome')
  }
}