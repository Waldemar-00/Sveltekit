import { error } from '@sveltejs/kit';
export const prerender = false;
export function load ( { url } )
{
  if (!url.pathname)
  {
    error(404, { message: 'Not Found between colors'})
  }
}