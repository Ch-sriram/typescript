/** GOAL */
// Make a network request to fetch some JSON and print the result

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// we will take console.log() statement and extract it into a
// separate helper function, which we'll call logTodo, as shown below. 
axios
  .get(url)
  .then(response => {
    const todos = response.data as Todo; // response.data contains 4 fields: userId, id, title & completed

    const { id, title, completed } = todos;

    // we'll call logTodo() defined below in here, but we'll
    // deliberately change the order of the parameters we send.
    // logTodo(id, completed, title); // with TS, we will get an error in the code editor itself.
    logTodo(id, title, completed);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}

/**
 * Output
 * ------
 *
      The Todo with ID: 1
      Has a title of: delectus aut autem
      Is it finished? false
 */
