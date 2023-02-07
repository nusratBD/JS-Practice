function errorHandle(num1, num2){
    if(typeof num1 !=='number' || typeof num2 !=='number'){
        return 'please enter a number';
    }
    else{
        return num1 + num2;
    }
}
let result = errorHandle('Nusrat', 30);
console.log(result);