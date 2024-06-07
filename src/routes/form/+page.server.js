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
	default: async ( { cookies, request } ) => {
		const response = await request.formData();
		db.createTodo(cookies.get('userid'), response.get('addTodo'));
	}
};
