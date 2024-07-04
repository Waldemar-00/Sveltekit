export async function load ({fetch, params})
{
  const response = await fetch( '/timezone/api/now' );
  const now = await response.json();
  console.log(now, 'NOW', params.timezone);

  return {
    now
  }
}