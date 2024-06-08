import { v4 } from 'uuid';
import * as db from '$lib/database.js'
export function load ( { cookies } ) {
	let userid = cookies.get('userid');
	if (!userid) {
		userid = v4();
		cookies.set('userid', userid, { path: '/' });
	}
	return {
		todos: db.createDefaultTodo(userid)
	};
}
export const actions = {
	create: async ( { cookies, request } ) => {
		const inputValue = ( await request.formData() ).get( 'inputValue' );
		const userid = cookies.get( 'userid' );
		db.createTodo(userid, inputValue);
	},
	delete: async ( { cookies, request } ) => {
		const id = ( await request.formData() ).get( 'id' );
		const userid = cookies.get( 'userid' );
		db.deleteTodo(userid, id);
	}
};


//! export const actions = {
//! 	default: async ( { cookies, request } ) => {
//! 		const inputValue = ( await request.formData() ).get( 'inputValue' );
//! 		const userid = cookies.get( 'userid' );
//! 		db.createTodo(userid, inputValue);
//! 	}
//! };
