//Find the max and min number among three number
const a = 23;
const b = 78;
const c = 46;
function maxMin(a, b, c){
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    return [max, min];
}
const result = maxMin(a, b, c);
console.log(result);