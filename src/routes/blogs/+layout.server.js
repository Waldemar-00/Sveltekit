import { posts } from './posts';


export function load () {
  return {
    summaries: posts.map( ( post ) => ({
      slug: post.slug,
      title: post.title,
    }))
  }
}