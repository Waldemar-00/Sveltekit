// @ts-nocheck
export async function handle({ event, resolve }) {
	event.locals.information = 'This text contains in the event.locals[name]';
	// if(event.url.pathname === '/') return new Response('Hello EVENT');
	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace(
			'<body',
			'<body style="color: hotpink; font-size: 1.5rem; background-color: #F9F4F4"'
		)
	});
}

// export async function handleFetch ( { request, fetch } ) {
// 	const url = new URL( request.url );
// 	if ( url.pathname === '/alfa' ) {
// 		return await fetch('/beta')
// 	}
// 	return await fetch(request)
// }

export async function handleError ( { error } ) {
	console.error(error.stack, 'error.stack');
	return {
		message: 'Message from handlerError',
		code: 'No any code because it is my error'
	}
}