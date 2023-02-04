//01. letter reverse
let anthem = 'Amar Sonar Bangla Ami Tomay Valobasi';
function stringRev(anthem){
    let revAnthem = '';
    for(let i = anthem.length-1; i>=0; i--){
        revAnthem = revAnthem + anthem[i];
    }
    return revAnthem;
}
const result = stringRev(anthem);
console.log(result);

//02. word reverse
let anthem2 = 'Amar Sonar Bangla Ami Tomay Valobasi';
function wordRev(anthem2){
    let split = anthem2.split(' ');
    const revSplit = [];
    for(let i=split.length-1; i>=0; i--){
        revSplit.push(split[i]);
    }
    let revWord = revSplit.join(' ');
    return revWord;
    }
    const result2 = wordRev(anthem2);
    console.log(result2);