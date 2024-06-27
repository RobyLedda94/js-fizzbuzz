// Apriamo il ciclo for

for (let i = 1; i <=100; i++){
    
    
    // creo la condizione con l'operatore AND cosi combino 2 condizioni 
if (i % 3 === 0 && i % 5=== 0) {
        console.log (`${i} FizzBuzz`);
    // creo la condizione per determinare se i numeri sono multipli di 3
} else if (i % 3 === 0) {
    console.log (`${i} Fizz`);

    // creo la condizione per determinare che i numeri siano multipli di 5
} else if (i % 5 === 0) {
    console.log (`${i} Buzz`);

    
} else {
    console.log (i);
}



  
}


