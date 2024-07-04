export async function load ()
{
  // const response = await fetch( '/timezone/api/now' );
  // const now = await response.json();
  // depends('data:now')
  return {
    now: Date.now()
  }
}