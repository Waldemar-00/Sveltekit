// @ts-nocheck
export async function load(event){
  return {
    message: `The answer is ${event.locals.answer}`
  }
}