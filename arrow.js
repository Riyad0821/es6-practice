// function doubleIt(num){
//     return num * 2;

// }
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give10 = () => 10;
const bigFunc = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result = doubleIt(50);
const result2 = add(50, 40);
const result3 = give10();
const result4 = bigFunc(6, 5);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);