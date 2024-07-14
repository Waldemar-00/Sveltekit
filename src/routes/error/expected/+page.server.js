import { error } from '@sveltejs/kit';
export function load () {
  throw error( 420, {
    message: 'Enhance your calm! Handle expected error'
  })
}