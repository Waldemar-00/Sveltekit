// @ts-nocheck
export async function load ( { locals, fetch } ) {
  const response = await fetch( '/alfa' );
  return {
    message: `The answer is ${ locals.answer }`,
    text: await response.text()
  }
}