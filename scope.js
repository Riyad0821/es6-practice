function sayHello(){
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello();

// var -> function
// let -> block
// const -> block

function sayHello1(){
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello1();

const x = 1;
x = 2; // error

let y = 1;
y = 2; // ok



