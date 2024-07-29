// @ts-nocheck
import { json } from "@sveltejs/kit";
export async function POST ( { request } )
{
  const name = await request.json();
  return json(name.toUpperCase())
}