/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// devo far scegliere un numero all'utente
const user = Math.floor(Math.random() * 6 + 1);
console.log(user);

// devo far scegliere un numero al computer
const computer = Math.floor(Math.random() * 6 + 1);
console.log(computer);

/* // crerare una condizione per la quale vince sempre il numero più alto

const buttonGameElement = document.querySelector("#formButton");

buttonGameElement.addEventListener("click",

    function(){
        if(user>computer){
            document.getElementById("result").innerHTML = `Il numero ${user} scelto dall'utente è maggiore del numero ${computer} scelto dal computer. Hai vinto!`
        } else if (user<computer){
            document.getElementById("result").innerHTML = `Il numero ${user} scelto dall'utente è minore del numero ${computer} scelto dal computer. Hai perso!`
  
        } else{
            document.getElementById("result").innerHTML = `Il numero ${user} scelto dall'utente e il numero ${computer} scelto dal computer sono uguali. Hai pareggiato!`

        }
    }

) */



if(user>computer){
    document.getElementById("result").innerHTML = `Il numero ${user} scelto dall'utente è maggiore del numero ${computer} scelto dal computer. Hai vinto!`
} else if (user<computer){
    document.getElementById("result").innerHTML = `Il numero ${user} scelto dall'utente è minore del numero ${computer} scelto dal computer. Hai perso!`

} else{
    document.getElementById("result").innerHTML = `Il numero ${user} scelto dall'utente e il numero ${computer} scelto dal computer sono uguali. Hai pareggiato!`

}




        





