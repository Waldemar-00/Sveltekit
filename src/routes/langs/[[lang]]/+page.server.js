// @ts-nocheck
const greetings = {
  en: 'Hello',
  fr: 'Bounjour',
  de: 'Hallo'
}
export function load ( { params } ) {
  return {
    lang: greetings[params.lang ?? 'en'],
  }
}