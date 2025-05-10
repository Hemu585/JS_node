// Immediately invoked function expressions(IIFE)
// to handle pollution from global scope we use iife
// ()() => IIFE

(function chai(){ //named iife as it has name
    console.log(`DB CONNECTED`)
})(); // error will come if we use more iife after this if we don't end first iife

( () => {
    console.log(`DB CONNECTED`)
})();
 

(function aurcode()  {
    console.log(`DB CONNECTED TWO`)
})();

((name) => { // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})('hemang')