// Leap Year
function checkLeapYear(year){
if(year%4===0 && year%100!==0 || year%400===0){
    return 'Leap Year';
}
else{
    return 'Not a Leap Year';
}
}
const isLeapYear = checkLeapYear(2027);
console.log(isLeapYear);