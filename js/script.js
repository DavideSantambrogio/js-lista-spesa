let listaSpesa = ["Pomodori", "Cipolle", "Carote", "Insalata", "Mele"];
let listString = ""
let i = 0;
console.log(listaSpesa)


// RISOLUZIONE ESERCIZIO


/* while (i < listaSpesa.length) {
     const curItem = listaSpesa[i];
     listString += `<li>${curItem}</li>`
     i++;
 }

*/ 







for (let i = 0; i < listaSpesa.length; i++) {
    
    const checkElem = listaSpesa[i]    

    const check = parseInt(prompt(`Quanti ${checkElem} hai?`));    
    // console.log(check)
    // console.log(checkElem)

    
     
    if (check <= 0) {
        const curItem = checkElem
        console.log(curItem)   
        listString += `<li>${curItem}</li>`                   
    }
       

    document.querySelector("ul").innerHTML = listString
        
}        
        









