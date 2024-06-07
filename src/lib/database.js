// @ts-nocheck
import { v4 } from 'uuid';
const mapTodos = new Map();

export function createDefaultTodo (userid) {
  if ( !mapTodos.get( userid ) ) {
    mapTodos.set( userid,
      [
        {
        id: v4(),
        addTodo: 'Learn Sveltekit',
        done: false
        },
      ]
    )
  }
  return mapTodos.get(userid)
}
export function createTodo ( userid, addTodo ) {
  const userTodos = mapTodos.get( userid );
  userTodos.push( {
    id: v4(),
    addTodo,
    done: false
  } );
}