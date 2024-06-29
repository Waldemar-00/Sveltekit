// @ts-nocheck
import { redirect } from '@sveltejs/kit';
export const actions = {
  default: ( { cookies } ) => {
    cookies.delete( 'login', { path: '/' } );
    throw redirect(303, '/groups')
  }
}