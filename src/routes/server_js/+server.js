// @ts-nocheck
import { json } from "@sveltejs/kit";
export async function POST ( { request } )
{
  const name = await request.json();
  return json(name.toUpperCase())
}
//! How it use???????????????????????????????
// export async function fallback ({request})
// {
//   return text(`I cought your ${request.method} request!`)
// }
//! How it use???????????????????????????????