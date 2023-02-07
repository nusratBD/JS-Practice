/* 
1.if ticket quantity is less than 100, per ticket price is 100
2. if ticket quantity is more than 100, but less than 200, first 100
price is 100, and rest price is 90.
3. if ticket quantity is more than 200, but less than 300, first 100
price is 100, second hundred price is 90, and rest is 70
*/
function discountPrice(ticketQuantity){
    if(ticketQuantity<=100){
        let price = ticketQuantity*100;
        return price;
    }
    else if(ticketQuantity<=200){
        let first100 = 100*100;
        let second100 = (ticketQuantity - 100)*90;
        let price = first100 + second100;
        return price;
    }
    else if(ticketQuantity>200){
        let first100 = 100*100;
        let second100 = 100*90;
        let third300 = (ticketQuantity - 200)*70;
        let price = first100 + second100 + third300;
        return price;
    }
}
let result = discountPrice(170);
console.log(result);