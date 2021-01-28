'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Setup constructor to take name and age (default to 0)
// getDesctiption - Vladimir is XX years old.
var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var location = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Anonymous';

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        this.location = location;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            //return 'Hi. I am ' + this.name + '!'; 
            return 'Hi. I am ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' years old and lives in ' + this.location + ' !';
        }
    }]);

    return Person;
}();

var person1 = new Person('Vladimir Stratiev', 27, 'Bulgaria');
console.log(person1.getGreeting());
console.log(person1.getDescription());

var person2 = new Person();
console.log(person2.getGreeting());
