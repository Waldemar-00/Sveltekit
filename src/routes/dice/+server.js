import { json } from '@sveltejs/kit';
export function GET () {
  const dice = Math.floor( Math.random() * 6 ) + 1;
  return json(dice)
}