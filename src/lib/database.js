// @ts-nocheck
import { v4 } from 'uuid';
const mapTodos = new Map();

export function createDefaultTodo (userid) {
  if ( !mapTodos.get( userid ) ) {
    mapTodos.set( userid,
      [
        {
        id: v4(),
        inputValue: 'Learn Sveltekit',
        done: false
        },
      ]
    )
  }
  return mapTodos.get(userid)
}
export function createTodo ( userid, inputValue ) {
  const arrayOfUserTodos = mapTodos.get( userid );
  arrayOfUserTodos.push( {
    id: v4(),
    inputValue,
    done: false
  } );
}