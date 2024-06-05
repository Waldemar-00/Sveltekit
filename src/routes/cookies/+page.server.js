// @ts-nocheck
// export function load({setHeaders, cookies}) {
//   setHeaders( {
//     'Content-type': 'text/plain',
//   } );
//   const cooky = cookies.get( 'visited' );
//   cookies.set( 'visited', 'true', {path: '/'} );
//   return {
//     cooky: (cooky === 'true').toString().toUpperCase() + '!',
//   }
// }


// export function load({cookies}) {
//   const cooky = cookies.get( 'visited' );
//   cookies.set( 'visited', 'true', {path: '/'} );
//   return {
//     cooky: (cooky === 'true').toString().toUpperCase() + '!',
//   }
// }

// export function load({cookies}) {
//   cookies.set( 'visited', 'true', { path: '/' } );
//   const cooky = cookies.get( 'visited' );
//   return {
//     cooky: cooky.toUpperCase() + '!',
//   }
// }

export function load({cookies}) {
  const cooky = cookies.get( 'visited' );
  cookies.set( 'visited', 'true', {path: '/'} );
  return {
    cooky: cooky === 'true'
  }
}