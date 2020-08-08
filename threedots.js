const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges);
// console.log(allAges2);

const riyad = 24;
const fazlay = 22;
const jannat = 19;
const ourAges = [24, 22, 19];
const maximum = Math.max(riyad, fazlay, jannat);
const maximum2 = Math.max(...ourAges);
console.log(maximum);
console.log(maximum2);