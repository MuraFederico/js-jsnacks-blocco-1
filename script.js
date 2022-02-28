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

// const userName = prompt('inserisci il tuo nome');
// const invitedList = ['federico', 
//     'giacomo', 
//     'luigi', 
//     'marco', 
//     'francesco' , 
//     'chiara', 
//     'giuliana', 
//     'maria'
// ];

// let invited = false;

// for (let i = 0; i < invitedList.length; i++) {
//     if (userName.toLowerCase() == invitedList[i].toLowerCase()){
//         invited = true;
//     };
    
// }

// if (invited) {
//     alert('benvenuto alla festa');
// }else {
//     alert('non sei stato invitato');
// }

////////////////////////////////////////////////////////

// es 1.5

// const oddNumbersArray = [];

// for (let i = 0; i < 6; i++) {

//     const userNunber = prompt('inserisci un numero');
//     if (userNunber % 2 != 0){
//         oddNumbersArray.push(userNunber);
//     }
    
// }

// alert(`i seguenti numeri inseriti erano dispari: ${oddNumbersArray}`);

////////////////////////////////////////////////////////

// es 1.6

// let userNumber = prompt('inserisci un numero a 4 cifre');

// while (userNumber.length != 4) {
//     alert('il numero inserito non ha 4 cifre');
//     userNumber = prompt('inserisci un numero a 4 cifre');

// }

// let somma = 0;

// for (let i = 0; i < userNumber.length; i++) {
//     somma += parseInt(userNumber[i]);
    
// }

// alert(`la somma delle cifre e': ${somma}`);

////////////////////////////////////////////////////////

// es 2.1

// CON WHILE

// let i = 1;
// let sum = 0;
// let media = 0;

// while(i <= 10) {
//     sum += i++;
// }

// media = sum / (i - 1);

// console.log(sum, media);

// let sum2 = 0; 

// CON FOR

// let sum = 0;

// for (i = 1; i <= 10; i++) {
//     sum += i;
// }

// let average = sum / (i - 1);

// console.log(sum, average);

////////////////////////////////////////////////////////

// es 2.2

// CON WHILE

// let i = 0
// let sum = 0;
// while (i < 5) {
//     let usernNumber = parseFloat(prompt('inserisci un numero'));
//     sum += usernNumber;
//     i++;
// }
// console.log(sum);

// CON FOR

// let sum = 0;

// for (i = 0; i < 5; i++) {
//     let usernNumber = parseFloat(prompt('inserisci un numero'));
//     sum += usernNumber;
// }
// console.log(sum);