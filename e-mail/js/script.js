/* 
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
(NON utilizzate il metodo .includes())
*/

//creare un array con mail casuali
const mails = ["gianmarco@hotmail.com","pimentel@hotmail.com","gianmarco@gmail.com", "pimentel@gmail.com","gianmarco@libero.it", "pimentel@libero.it",];
console.log(mails);

//memorizzo il button su JS
const buttonElement = document.querySelector("#searchButton");
// dico al computer le azione ceh deve eseguire dopo il click
buttonElement.addEventListener("click",

    function(){
            // chiedere all'utente di inserire una mail
            const mailUtente = document.getElementById("mail").value;

            // verificare se la mail inseirta dall'utente è presente delle mail contenute negli array
            let y = 0 ;
            
            for(let i=0; i<mails.length; i++){
                console.log(mailUtente); 
                if(mailUtente == mails[i]){
                    y = 1;
                } 
            }

            // stamparea a schermo il risultato
            if (y == 0){
                document.getElementById("result").innerText =`La mail inserita non è corretta.`;
            } else{
                document.getElementById("result").innerText = `Hai inserito una mail corretta`;
            }

            
    }

)




