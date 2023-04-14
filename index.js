//Uzduotis #1:
console.log("Uzduotis #1:")

function laikas(h1, min1, h2, min2){
    let startTime = (h1 * 60) + min1; //gaunam minutes is starto laiko
    let endTime = (h2 * 60) + min2; //gaunam minutes is pabaigos laiko
        if(startTime < endTime){
            t = endTime - startTime;
        } else {
            t = (1440 - startTime) + endTime;
        }
    let calcTimeHours = t/60; //verciam tarpini laika i valandas
    let roundedHours = Math.floor(calcTimeHours); //apvalinam valandas iki artimiausio sveiko skaiciaus (zemyn)
    let calcTimeMins = (calcTimeHours - roundedHours) * 60; //atimam is tarpiniu valandu apvalintas valandas ir dauginam is 60, kad gautume minutes
    let roundedMins = Math.round(calcTimeMins);//apvalinam minutes iki artimiausio sveiko skaiciaus 

    return roundedHours + `h ir ` + roundedMins + `min`; 
}

console.log(laikas(15,10,14,0))


//Uzduotis #2:
// console.log("Uzduotis #2:")


//Uzduotis #3:
// console.log("Uzduotis #3:")


//Uzduotis #4:
// console.log("Uzduotis #4:")


//Uzduotis #5:
// console.log("Uzduotis #5:")


//Uzduotis #6:
// console.log("Uzduotis #6:")


//Uzduotis #7:
// console.log("Uzduotis #7:")