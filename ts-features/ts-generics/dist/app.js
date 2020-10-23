"use strict";
const names = ['Max', 'Manu'];
const elements = [];
const namesArr = [];
const promise = new Promise((resolve, reject) => setTimeout(() => (Math.random() >= 0.5) ? resolve('This is done!') : reject('There\'s an Error'), 1000));
promise
    .then(data => console.log(data.split(' ')))
    .catch(error => console.log(error.split(' ')));
function mergeObjects_(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(mergeObjects_({ name: 'Ram' }, { age: 25 }));
const mergedObj_ = mergeObjects_({ name: 'Ram' }, { age: 25 });
const mergedObject_ = mergeObjects_({ name: 'Ram' }, { age: 25 });
mergedObject_.name;
mergedObject_.age;
function mergeObjects(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = mergeObjects({ name: 'Ram' }, { age: 25 });
console.log(mergedObject.name);
console.log(mergedObject.age);
const mergedObject2 = mergeObjects({ name: 'Ram', hobbies: ['Reading', 'Coding', 'Sports'] }, { age: 25, occupation: 'software engineer' });
console.log(mergedObject2.name, mergedObject2.hobbies[2], mergedObject2.age, mergedObject2.occupation);
const mergedObject3 = mergeObjects({ name: 'Ram', hobbies: ['Reading', 'Coding', 'Sports'] }, { age: 25, occupation: 'software engineer' });
const mergedObject4 = mergeObjects({ name: 'Ram', hobbies: ['Coding'] }, 30);
console.log(mergedObject4);
function mergeObjs(objA, objB) {
    return Object.assign(objA, objB);
}
;
function countAndDescribe(element) {
    let descriptionText = (element.length === 0) ? 'Got no value.' : `Got ${element.length} element(s).`;
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking', 'Coding']));
//# sourceMappingURL=app.js.map