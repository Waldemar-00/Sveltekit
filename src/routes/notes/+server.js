// @ts-nocheck
import { json } from '@sveltejs/kit';
import * as db from '$lib/database.js';

export async function POST ( { request, cookies } ) {
  const {inputValue} = await request.json();
  const userid = cookies.get( 'userid' );
  const { id } = db.createTodo( userid, inputValue );
  return json({id}, {status: 201})
}