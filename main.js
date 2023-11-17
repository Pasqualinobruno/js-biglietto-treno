/* 
    Descrizione:
    Il programma dovrà chiedere all'utente:
    il numero di chilometri che vuole percorrere
    e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
    Queste sono le regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65 (fortunelli).
    L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
*/
/*
    Tools:
    -variabili
    -pront
    -console.log
    -if/else
    -number
    -* / 

*/
//    il numero di chilometri che vuole percorrere
const km_to_travel = prompt("Quanti km devi percorrere durante il viaggio?");
/* console.log(km_to_travel);  */
/* const km_messageElement = document.getElementById(km); */
/* km_messageElement.innerHTML = `I km da percorrere sono ${km_to_travel}`; */
//    l'età del passeggero
const user_age = prompt("Quanti hanni hai?");
/* console.log(user_age); */

//calcolo del prezzo del biglitto (km * 0.21) 
const price_of_ticket = km_to_travel * Number(0.21)
/* console.log(price_of_ticket); */    

//se il passeggero è minorenne c'è uno sconto del 20%
if (user_age < Number(18)) {
    const price_for_minor = (price_of_ticket - (price_of_ticket * Number(20) / Number(100)));
    /*console.log(price_for_minor.toFixed(2));*/    
    const price_minorElement = document.getElementById('price-ticket');
    price_minorElement.innerHTML = `Il tuo prezzo è ${price_for_minor.toFixed(2)}`;
    
} else if (user_age > Number(65)) {
    //invece se fosse over 65 avrà uno sconto del 40%
    const price_for_over = (price_of_ticket - (price_of_ticket * Number(40) / Number(100)));
    /* console.log(price_for_over); */
    const price_overElement = document.getElementById('price-ticket');
    price_overElement.innerHTML = `Il tuo prezzo è ${price_for_over.toFixed(2)}`;
} else {
    //altrimenti paga il prezzo pieno
    const priceElemet = document.getElementById('price-ticket')
    priceElemet.innerHTML = `Il tuo prezzo è ${price_of_ticket.toFixed(2)}`;


}