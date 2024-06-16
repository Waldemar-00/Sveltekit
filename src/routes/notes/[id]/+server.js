import * as db from '$lib/database.js'


export function DELETE ( { params, cookies } ) {
  const userid = cookies.get( 'userid' );
  const id = params.id;
  db.deleteTodo( userid, id );
  return new Response( null, { status: 204 } );
}
export function PUT ( { cookies, params } ) {
  const userid = cookies.get( 'userid' );
  db.putTodo( userid, params.id );
  return new Response( null, { status: 204 } );
}