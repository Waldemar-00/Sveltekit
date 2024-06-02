import { posts } from '../posts';
import { error } from '@sveltejs/kit';

export function load ( { params } ) { //untrack, url - params
  const post = posts.find( ( post ) => post.slug === params.slug );
  if ( !post ) throw error( 404 );
  return {
    post
  }
}