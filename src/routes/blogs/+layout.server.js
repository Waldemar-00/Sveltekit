import { posts } from './posts';

export const prerender = true;
// export const ssr = false;
// export const csr = false;
//! if both ssr and csr are false - nothing will be rendered
export function load () {
  return {
    summaries: posts.map( ( post ) => ({
      slug: post.slug,
      title: post.title,
    }))
  }
}