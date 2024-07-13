// @ts-nocheck
export async function load ( { locals, fetch } ) {
  const responseA = await fetch( '/alfa' );
  const responseB = await fetch( '/beta' );
  const textA = await responseA.text();
  return {
    fromEvent: `${locals.information}`,
    text: textA ,
    textA: textA,
    textB: await responseB.text()
  }
}