const shoppingCart = {
    laptop: 1,
    mouse: 1,
    Keyboard: 3,
    watch: 1,
    pen: 5,
    notebook: 3,
    mobile: 1,
    mug: 1
}

//Method: 01
const keys = Object.keys(shoppingCart);
for (let i = 0; i < keys.length; i++) {
    const propertyName = keys[i];
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, ': ', propertyValue);
}
/* 
output:
laptop :  1
mouse :  1
Keyboard :  3
watch :  1
pen :  5
notebook :  3
mobile :  1
mug :  1
*/

//Method: 02
for (key in shoppingCart) {
    console.log(key, ': ', shoppingCart[key]);
    /* 
    output:
    laptop :  1
    mouse :  1
    Keyboard :  3
    watch :  1
    pen :  5
    notebook :  3
    mobile :  1
    mug :  1
    */
}