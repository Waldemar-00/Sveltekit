// @ts-nocheck
// export function load ()
// {

// }
export const prerender = false;
export const actions = {
  default: async ({ request, cookies }) =>
  {
    const formData = await request.formData();
    const comment = formData.get('comment')
    cookies.set( 'comment', comment, { path: '/' } );
    return {success: true, comment}
  }
}