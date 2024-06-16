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
  if ( inputValue === '' ) {
    throw new Error('Please enter todo description')
  }
  const userTodos = mapTodos.get( userid );
  if ( userTodos.find( t => t.inputValue === inputValue )) {
    throw new Error('Descriptions must be unique')
  }
  const id = v4();
  mapTodos.get( userid ).push( {
    id,
    inputValue,
    done: false
  } );
  return {
    id
  }
}

export function deleteTodo ( userid, id ) {
  const userTodos = mapTodos.get( userid );
  const index = userTodos.findIndex( t => t.id === id );
  if ( index !== -1 ) {
    userTodos.splice( index, 1 );
  }
}

export function putTodo (userid, id) {
  const userTodos = mapTodos.get( userid );
  userTodos.forEach( t => {
    if ( t.id === id ) {
      t.done = !t.done;
    }
  });
}