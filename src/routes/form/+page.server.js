// @ts-nocheck
export function load ({cookies})
{
  if (cookies.get( 'comment' )) return {
    comment: cookies.get( 'comment' )
  }
}

export const actions = {
  default: async ( { request, cookies } ) => {
    const formData = await request.formData();
    const comment = formData.get( 'comment' );
    cookies.set('comment', comment, {path: '/'})
  }
}