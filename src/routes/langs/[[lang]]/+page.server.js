// @ts-nocheck
const greetings = {
  en: 'Hello',
  fr: 'Bounjour',
  de: 'Hallo'
}
export function load ( { params } ) {
  console.log(params.lang);
  return {
    lang: greetings[params.lang ?? 'en'],
  }
}