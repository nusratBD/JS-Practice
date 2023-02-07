const phones = [
    {name: 'Samsung', price: 20000},
    {name: 'Oppo', price: 18000},
    {name: 'iPhone', price: 820000},
    {name: 'Xaomi', price: 20000},
    {name: 'Vibo', price: 16000},
]
function cheapestPhone(){
    let cheapestPhone = phones[0].price;
    for(let i=0; i<phones.length; i++){
        if(phones[i].price<cheapestPhone){
            cheapestPhone = phones[i].price;
        }
    }
    return cheapestPhone;
}
let result = cheapestPhone(phones);
console.log(result);