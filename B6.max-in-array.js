const numbers = [12, 34, 11, 7, 73, 44, 14];
function arrayMax(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    return largest;
}
const result = arrayMax(numbers);
console.log(result);