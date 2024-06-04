import { posts } from '../posts';
import { error } from '@sveltejs/kit';

export const ssr = false;
//! if both ssr and csr are false - nothing will be rendered
// export const csr = false;
export function load ( { params } ) {
  //untrack, url - params contains slug, slug appiars after hover event, but works after click.
  const post = posts.find( ( post ) => post.slug === params.slug );
  if ( !post ) throw error( 404, 'Not found');
  return {
    post
  }
}