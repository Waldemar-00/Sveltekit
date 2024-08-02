// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export function load ( { cookies, url, params } )
{
  console.log( url.pathname, ' - PATHNAME' );
  console.log(params, ' - PARAMS');


  if ( !cookies.get( 'login' ) ) {
    throw redirect(303, `/groups/login?rt=${url.pathname}`)
  }
}