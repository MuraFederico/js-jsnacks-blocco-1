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

// const word1 = prompt('prima parola').trim();
// const word2 = prompt('seconda parola').trim();

// let lengthWord1 = word1.length;
// let lengthWord2 = word2.length;

// if (lengthWord1 > lengthWord2) {
//     alert(`${word1} ${word2}`);

// } else if(lengthWord2 > lengthWord1) {
//     alert(`${word2} ${word1}`);
    
// }else {
//     alert('le parole hanno la stessa lunghezza');
// }

////////////////////////////////////////////////////////

// es 1.3

// let number;
// let result = 0;

// for (let i = 0; i < 10; i++) {
//     number = parseFloat(prompt('inserisci un numero'));
//     result += number;
    
// }

// alert(`il risultato e' ${result}`);

////////////////////////////////////////////////////////

// es 1.4

const userName = prompt('inserisci il tuo nome');
const invitedList = ['federico', 
    'giacomo', 
    'luigi', 
    'marco', 
    'francesco' , 
    'chiara', 
    'giuliana', 
    'maria'
];

let invited = false;

for (let i = 0; i < invitedList.length; i++) {
    if (userName.toLowerCase() == invitedList[i].toLowerCase()){
        invited = true;
    };
    
}

if (invited) {
    alert('benvenuto alla festa');
}else {
    alert('non sei stato invitato');
}

