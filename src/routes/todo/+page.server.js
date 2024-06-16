// @ts-nocheck
import { v4 } from 'uuid';
import * as db from '$lib/database.js';
import { fail } from '@sveltejs/kit';
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
		const userid = cookies.get( 'userid' );
		const formData = await request.formData();
		try {
			const inputValue = formData.get( 'inputValue' );
			db.createTodo(userid, inputValue);
		} catch (error) {
			return fail( 422, {
				inputValue: formData.get( 'inputValue' ),
				message: error.message,
			})
		}
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
