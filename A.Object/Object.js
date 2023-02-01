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
/*---------------------------------------------------
                    get object property 
----------------------------------------------------*/
//Method: 01
console.log(shoppingCart.Keyboard);

//Method: 02
console.log(shoppingCart['watch']);

//Method: 03
const property = 'notebook';
console.log(shoppingCart[property]);
console.log(shoppingCart.property);//undefined. Not applicable.

//Method: 04 : Keys
const keys = Object.keys(shoppingCart);
console.log(keys);
/* 
output: [
  'laptop',   'mouse',
  'Keyboard', 'watch',
  'pen',      'notebook',
  'mobile',   'mug'
]
*/

//Method: 05 : values
const values = Object.values(shoppingCart);
console.log(values);
/* 
output:
[
  1, 1, 3, 1,
  5, 3, 1, 1
]
*/

//Method: 06 : entries
const entries = Object.entries(shoppingCart);
console.log(entries);
/* 
output:
[
  [ 'laptop', 1 ],
  [ 'mouse', 1 ],
  [ 'Keyboard', 3 ],
  [ 'watch', 1 ],
  [ 'pen', 5 ],
  [ 'notebook', 3 ],
  [ 'mobile', 1 ],
  [ 'mug', 1 ]
]
*/

//Method: 07 : destructure
const {laptop, Keyboard, mouse, notebook, mug, pen} = shoppingCart;
console.log(mug, pen);//output: 1 5

/* -------------------------------------------------
                set object property
---------------------------------------------------- */
console.log(shoppingCart);
/* 
output:
{
  laptop: 1,
  mouse: 1,
  Keyboard: 3,
  watch: 1,
  pen: 5,
  notebook: 3,
  mobile: 1,
  mug: 1
}
*/

//Method: 01
shoppingCart.laptop = 2;

//Method: 02
shoppingCart['mouse'] = 2;

//Method: 03
shoppingCart[property] = 7;

console.log(shoppingCart);
/* 
output:
{
  laptop: 2,
  mouse: 2,
  Keyboard: 3,
  watch: 1,
  pen: 5,
  notebook: 7,
  mobile: 1,
  mug: 1
}
*/
