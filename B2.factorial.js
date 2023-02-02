function factorial(num){
    let mutiplication = 1;
    for(let i=num; i>0; i--){
        mutiplication = mutiplication*i;
    }
    return mutiplication;
}
const result = factorial(3);
console.log(result);