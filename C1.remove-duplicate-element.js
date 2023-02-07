const names = ['abul', 'babul', 'dabul', 'kabul', 'cabul', 'Abul', 'abul', 'ebul', 'Ebul', 'Enamul', 'enamul', 'shofia', 'Shofia'];
function removeArray(names){
    let unique = [];
   for(let i=0; i<names.length; i++){
    let name = names[i].toLowerCase();
    if(unique.includes(name)===false){
        unique.push(name);
    }
   }
   return unique;
} 
let result = removeArray(names);
console.log(result);
