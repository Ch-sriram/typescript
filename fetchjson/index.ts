/** GOAL */
// Make a network request to fetch some JSON and print the result

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Instead of outputting the entire object, we can try and beautify the output as follows
axios
  .get(url)
  .then(response => {
    const todos = response.data; // response.data contains 4 fields: userId, id, title & completed
    const { ID, Title, finished } = todos; // no error (but we should get an error)
    
    console.log(`
      The Todo with ID: ${ID}
      Has a title of: ${Title}
      Is it finished? ${finished}
    `);
  });

/**
 * Output
 * ------
 * 
      The Todo with ID: undefined
      Has a title of: undefined
      Is it finished? undefined
 */

