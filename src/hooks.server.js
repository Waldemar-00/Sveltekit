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