//@ts-nocheck
const langs = {
  '/hooks/universal/reroute/sp': '/hooks/universal/reroute/sp/about',
  '/hooks/universal/reroute/en': '/hooks/universal/reroute/en/about',
  '/hooks/universal/reroute/fr': '/hooks/universal/reroute/fr/about'
}

export function reroute ({url})
{
  if ( url.pathname in langs )
  {
    return langs[ url.pathname ];
  }
}