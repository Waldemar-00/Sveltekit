export async function load ({parent})
{
  console.log(parent());
  const { a } = await parent();
  return { b: a + 1}
}