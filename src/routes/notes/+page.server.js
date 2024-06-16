import { v4 } from 'uuid';
import * as db from '$lib/database.js';


export function load ( { cookies } ) {
	let userid = cookies.get('userid');
	if (!userid) {
		userid = v4();
		cookies.set('userid', userid, { path: '/' });
	}
	return {
		notes: db.createDefaultTodo(userid)
	};
}