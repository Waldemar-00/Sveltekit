// @ts-nocheck
import { fail } from '@sveltejs/kit';
//! return object data (also in the page store or export let data)
// export function load ( )
// {
//   const res = Promise.reject();
//   res.catch( () => console.log( "CATCH!!!" ) );
//   return {
//     res
//   }
// }
export const prerender = false;
//! return object form (also in the page store or export let form)
export const actions = {
  default: async ({cookies, request}) =>
  {
    const data = await request.formData();
    const email = data.get( 'email' );
    if ( email !== 'vova108vova@gmail.com' ) {
      return fail(400, { email, missing: true })
    };
    //! if(!user || user.password !== hash(password)) return fail(400,{ email, incorrect: true })
    //! no any password in the refund!!!
    cookies.set( 'email', email, { path: '/' } );
    return {success: true, email}
  }
}