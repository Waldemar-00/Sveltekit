export async function load ({parent, untrack})
{
  // console.log(parent());
  const { a } = await parent();
  untrack( () => console.log(a + 111) );
  return { b: a + 11}
}

// export async function load ()
// {
//   // return {
//   //   a: 13,
//   //   b: 7
//   // }
// }