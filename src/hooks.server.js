// @ts-nocheck
import { sequence } from '@sveltejs/kit/hooks';

async function first ( { event, resolve } )
{
	// console.log('EVENT', event, 'EVENT');

	event.locals.information = 'This text contains in the event.locals[name]';
	//! emergency method above
	return await resolve( event, {
		transformPageChunk: ( { html } ) => html.replace(
				'<body',
				'<body style="color: red; font-size: 1.5rem; background-color: #F9F4F4"'
			),
		preload: () => console.log('FIRST PRELOAD') //! It is adding files in the <head> of the page
	} )
}
async function second ( { event, resolve } )
{
	return await resolve( event, {
		preload: () => console.log( 'SECOND PRELOAD' ), //! It is adding files in the <head> of the page
		filterSerializedResponseHeaders: () => console.log( 'filterSerializedResponseHeaders' ), //! It defines what  headers will be included in the serialized responses when the load function is downloading resources with fetch. Default no one.
		transformPageChunk: ( { html } ) => html.replace(
				'<body',
				'<body style="color: white; font-size: 1.5rem; background-color: #F9F4F4"'
			),
	} );
}
export const handle = sequence( first, second );



//! handle
// export async function handle ( { event, resolve } ) //! always only one on the hooks server!!!
// {
// 	event.locals.information = 'This text contains in the event.locals[name]';
// 	// if(event.url.pathname === '/') return new Response('Hello EVENT');
// 	return await resolve(event, {
// 		transformPageChunk: ({ html }) => html.replace(
// 			'<body',
// 			'<body style="color: white; font-size: 1.5rem; background-color: #F9F4F4"'
// 		)
// 		//! ?????????????? transformPageChunk: ( { html } ) => html.replace( '%lang%', get_lang( event ) )
// 	});
// }

//! Here you can for example redirect request
// export async function handleFetch ( { request, fetch } ) {
// 	const url = new URL( request.url );
// 	if ( url.pathname === '/alfa' ) {
// 		return await fetch('/beta')
// 	}
// 	return await fetch(request)
// }

export async function handleError ( { error } ) { //! It is for unexpected errors!
	console.error(error.stack, 'error.stack'); //! will not be in the console for security reasons
	return {
		message: 'Unexpected ERROR - message from the handlerError hook in the hook.server.js',
		other: 'No any custom text or code'
		//! you can get those properties from $page.error.someProperty
	}
}

export async function handleFetch ( { request, fetch } )
{

	if ( request.url.startsWith( 'http://localhost:5173/beta' ) )
	{
		// console.log("REQUEST", request, "REQUEST");
		request = new Request( request.url.replace( 'http://localhost:5173/beta', 'http://localhost:5173/about' ), request );
		// console.log("REQUEST", request, "REQUEST");
	}
	return fetch( request );
}