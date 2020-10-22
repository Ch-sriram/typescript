"use strict";
const names = ['Max', 'Manu'];
const elements = [];
const namesArr = [];
const promise = new Promise((resolve, reject) => setTimeout(() => (Math.random() >= 0.5) ? resolve('This is done!') : reject('There\'s an Error'), 1000));
promise
    .then(data => console.log(data.split(' ')))
    .catch(error => console.log(error.split(' ')));
//# sourceMappingURL=app.js.map