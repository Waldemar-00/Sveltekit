import { redirect } from '@sveltejs/kit';

export function load ( { cookies, url } )
{
  console.log(url.pathname, 'PATHNAME');

  if ( !cookies.get( 'login' ) ) {
    throw redirect(303, `/groups/login?rt=${url.pathname}`)
  }
}