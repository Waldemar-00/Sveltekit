// @ts-nocheck
export async function load ({parent})
{
  console.log(parent(), 'A, B');

  const { a, b } = await parent();
  console.log(a, b);

  return {
    c: a + b
  }
}
