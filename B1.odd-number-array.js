const numbers = [2, 5, 7, 34, 77];
let sum = 0;
function arrayOddEven(numbers, sum){

}for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        console.log('Even');
    }
    else{
        console.log('Odd');
    }
    sum = sum + numbers[i];
    if(sum%2!==0){
        console.log('Odd Sum:',sum);
    }
}
const result = arrayOddEven(numbers, sum);

function arrayOdd(numbers){
    const newNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2!==0){
            newNumbers.push(numbers[i]);
        }
    }
    return newNumbers;
}
const result2 = arrayOdd(numbers);
console.log(result2);

function arrayAdd(result2){
    let sum = 0;
    for(let i=0; i<result2.length; i++){
        sum = sum + result2[i];
    }
    return sum;
}
const arraySum = arrayAdd(result2);
console.log(arraySum);