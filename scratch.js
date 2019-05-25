const ages =[10,12,14,16,18,20,22,24,26,28.30,32,34,36];

// 1) find the total of all the elements in the array
// 2) find the number of elements in the array
// 3) divide sum by num elements - answer!
let sum = 0;

for (const value of ages) {
    console.log(value);
    sum = sum+value

}
let average = sum /ages.length;

console.log(average)