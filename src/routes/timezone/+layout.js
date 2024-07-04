export async function load ({depends})
{
  // const response = await fetch( '/timezone/api/now' );
  // const now = await response.json();
  depends('data:now')
  return {
    now: Date.now()
  }
}