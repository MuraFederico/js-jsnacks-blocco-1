// es 1.1

// const num1 = parseFloat(prompt('numero 1'));
// const num2 = parseFloat(prompt('numero 2'));

// if (num1 > num2) {
//     alert(num1);

// }else if (num2 > num1){
//     alert(num2);

// }else{
//     alert('i numeri sono uguali');
// }

//////////////////////////////////////////////////////

// es 1.2

const word1 = prompt('prima parola').trim();
const word2 = prompt('seconda parola').trim();

let lengthWord1 = word1.length;
let lengthWord2 = word2.length;

if (lengthWord1 > lengthWord2) {
    alert(`${word1} ${word2}`);

} else if(lengthWord2 > lengthWord1) {
    alert(`${word2} ${word1}`);
    
}else {
    alert('le parole hanno la stessa lunghezza');
}