let shoppingCart = [
    {name: 'laptop', quantity: 1, price: 50000},
    {name: 'Mobile', quantity: 1, price: 20000},
    {name: 'Watch', quantity: 1, price: 5000},
    {name: 'Bag', quantity: 1, price: 2000},
    {name: 'Note Book', quantity: 5, price: 500},
    {name: 'Pen', quantity: 10, price: 200}
]
function sumArray(shoppingCart){
    let sum = 0;
    for(let i=0; i<shoppingCart.length; i++){
        sum = sum + shoppingCart[i].price;
    }
    return sum;
}
let result = sumArray(shoppingCart);
console.log(result)