// @ts-nocheck
export function load ( { cookies } )
{
  const email = cookies.get( 'email');
  if ( email ) return {email}
}


export const actions = {
  default: async ({cookies, request}) =>
  {
    const data = await request.formData();
    const email = data.get( 'email' );
    cookies.set('email', email, {path: '/'})
  }
}