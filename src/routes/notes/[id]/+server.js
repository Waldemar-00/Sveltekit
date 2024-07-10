import * as db from '$lib/database.js'


export function DELETE ( { params, cookies } ) {
  const userid = cookies.get( 'userid' );
  const id = params.id;
  db.deleteTodo( userid, id );
  const responseBody = {
    message: 'Notes deleted successfully'
  }
  return new Response( JSON.stringify( responseBody ), {
    headers: { 'Content-Type': 'application/json'}, //! headers is optional here
    status: 200
  } );
}
export function PUT ( { cookies, params } ) {
  const userid = cookies.get( 'userid' );
  db.putTodo( userid, params.id );
  return new Response( null, { status: 204 } );
}