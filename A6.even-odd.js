function num_checker(num){
    if(num%2===0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
const result = num_checker(87);
console.log(result);