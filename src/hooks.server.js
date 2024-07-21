// @ts-nocheck
export async function handle({ event, resolve }) {
	event.locals.information = 'This text contains in the event.locals[name]';
	// if(event.url.pathname === '/') return new Response('Hello EVENT');
	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace(
			'<body',
			'<body style="color: white; font-size: 1.5rem; background-color: #F9F4F4"'
		)
		//! ?????????????? transformPageChunk: ( { html } ) => html.replace( '%lang%', get_lang( event ) )
	});
}

//! Here you can for example redirect request
// export async function handleFetch ( { request, fetch } ) {
// 	const url = new URL( request.url );
// 	if ( url.pathname === '/alfa' ) {
// 		return await fetch('/beta')
// 	}
// 	return await fetch(request)
// }

export async function handleError ( { error } ) {
	console.error(error.stack, 'error.stack'); //! will not be in the console for security reasons
	return {
		message: 'Unexpected ERROR - message from the handlerError hook in the hook.server.js',
		other: 'No any custom text or code'
		//! you can get those properties from $page.error.someProperty
	}
}