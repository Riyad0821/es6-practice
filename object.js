// Object Property Initializer

// ES5
function user(name, division) {
    return {
        name: name,
        division: division
    };
}

// ES6

function user(name, division) {
    return {
        name,
        division
    };
}


let uname = "John",
    udivision = "First";

let user1 = {
    uname,
    udivision
};

console.log(user1.uname);
console.log(user1.udivision);

// Computed Property Name

// ES5
var emp = {
    id: 101,
    name: "John",
}

var department = 'dep_name';

emp[department] = 'Sales';
console.log(emp);

// ES6
var department = 'dep_name';
var emp1 = {
    id: 102,
    name: "Monica",
    [department]: 'Sales'
};

console.log(emp1);

// Concise method syntax

// ES5
let user2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// ES6
let user3 = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

// Merge objects in ES6

// By using Object.assign() method
var obj1 = { 1: "Hello", 2: "World" };
var obj2 = { 3: "foo", 4: "bar" };
var obj3 = { 5: "baz", 6: "qux" };

var final_obj = Object.assign(obj1, obj2, obj3);
console.log(final_obj);

// By using Object spread operator
var final_obj1 = { ...obj1, ...obj2, ...obj3 };
console.log(final_obj1);

















const person = {
    name: 'John',
    walk() { },
    talk() { }
};