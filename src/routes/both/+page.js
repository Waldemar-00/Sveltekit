// @ts-nocheck
export async function load ({data})
{
  // console.log(data);
  const module = data.cool ? await import( './cool.svelte' ) : await import( './boring.svelte' );
  // console.log(module);

  return {
    component: module.default,
    message: data.message,
  }
}