"use strict";
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.age = 30;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
;
var user2 = new Person('Ram');
user2.greet('Hi there - I am');
var user3;
user3 = new Person('Roop');
user3.greet('Howdy! My name is');
//# sourceMappingURL=app.js.map