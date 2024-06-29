import { redirect } from '@sveltejs/kit';

export function load ( { cookies, url } )
{
  console.log(url.pathname);

  if ( !cookies.get( 'login' ) ) {
    throw redirect(303, `/groups/login?redirectTo=${url.pathname}`)
  }
}