// import {error} from '@sveltejs/kit'
let count = 0;
export function load ()
{
  count++;
  console.log( `${ count } I have alredy worked!` );
  // throw error(420, 'In layout!')
}