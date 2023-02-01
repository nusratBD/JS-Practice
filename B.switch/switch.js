//01
const color = 'red';
if(color==='green'){
    console.log('Color Green');
}
else if(color === 'pink'){
    console.log('Color Pink');
}
else if(color === 'red'){
    console.log('Color Red');
}
else if(color==='yellow'){
    console.log('Color Yellow');
}
else{
    console.log('Color White');
}

switch(color){
    case('green'):
    console.log('Color Green');
    break;

    case('red'):
    console.log('Color Red');
    break;

    case('pink'):
    console.log('Color Pink');
    break;

    case('yellow'):
    console.log('Color Yellow');
    break;

    default:
        console.log('Color White');
}

//02
const signal = 'red';
if(signal==='red'){
    console.log('Danger');
}
else if(signal === 'yellow'){
    console.log('Stop');
}
else if(signal==='green'){
    console.log('Go');
}

switch(signal){
    case('red'):
    console.log('Switch Danger');
    break;
    case('yellow'):
    console.log('Switch Yellow');
    break;
    case('green'):
    console.log('Switch Green');
    break;
}