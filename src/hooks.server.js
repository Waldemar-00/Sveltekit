// @ts-nocheck
export async function handle({ event, resolve }) {
	event.locals.answer = '4212';
	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace(
			'<body',
			'<body style="color: hotpink; font-size: 1.5rem; background-color: #F9F4F4"'
		)
	});
}

export async function handleFetch ( { request, fetch } ) {
	const url = new URL( request.url );
	if ( url.pathname === '/alfa' ) {
		return await fetch('/beta')
	}
	return await fetch(request)
}

export async function handleError ( { error } ) {
	console.error(error.stack, 'error.stack');
	return {
		message: 'My message in object',
		code: 'No any code because it is my error'
	}
}