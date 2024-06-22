// @ts-nocheck
export async function load ( { locals, fetch } ) {
  const responseA = await fetch( '/alfa' );
  const responseB = await fetch( '/beta' );
  const textA = await responseA.text();
  return {
    message: `The answer is ${ locals.answer }`,
    text: textA ,
    textA: textA,
    textB: await responseB.text()
  }
}