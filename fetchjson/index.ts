/** GOAL */
// Make a network request to fetch some JSON and print the result

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// It is always better to have a comment that says what kind of fields are present inside fetched data, and so, we do it programmatically using
// typescript. Previously, we were fetching fields that didn't exist in `response.data`, and so, we need to use typescript, to give the object
// we are fetching some structure, and that can be done using interfaces in TS, as follows:

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
// NOTE: Inside an interface, we can ignore properties that we don't deem to have a strict definition of, Eg: `userId` is not defined in the
//       interface, but it is a field inside `response.data`.

// We can now use the Todo interface above to enforce the data we fetch, to have the fields as mentioned in the interface. For `response.data`
// we will enforce TS to read as a Todo as shown below in line 25
axios
  .get(url)
  .then(response => {
    const todos = response.data as Todo; // response.data contains 4 fields: userId, id, title & completed
    // const { ID, Title, finished } = todos; // we are getting an error now, and so, we need to fix it as shown in line 28.

    const { id, title, completed } = todos;
    console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
  });

/**
 * Output
 * ------
 *
      The Todo with ID: 1
      Has a title of: delectus aut autem
      Is it finished? false
 */

