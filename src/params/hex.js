// @ts-nocheck
// import { error } from '@sveltejs/kit';
export const match = ( value ) =>
{
	// if ( !(/^[0-9a-f]{6}$/.test( value )) )
	// {
	// 	error(404, { message: 'Not Found between colors. Message from hex.js'})
	// }
	return /^[0-9a-f]{6}$/.test(value);
}