//Swap

//Method-01
let first = 5;
let second = 7;
console.log(first, second);
let temp = first;
first = second;
second = temp;
console.log(first, second);

//Method-02
let first2 = 10;
let second2 = 20;
console.log(first2, second2);
[first2, second2] = [second2, first2];
console.log(first2, second2);