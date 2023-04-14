//Uzduotis #1:
console.log("Uzduotis #1:")

function laikas(h1, min1, h2, min2){
    startTime = (h1 * 60) + min1; //gaunam minutes is starto laiko
    endTime = (h2 * 60) + min2; //gaunam minutes is pabaigos laiko
        if(startTime < endTime){
            t = endTime - startTime;
        } else {
            t = (1440 - startTime) + endTime;
        }
    calcTimeHours = t/60; //verciam tarpini laika i valandas
    roundedHours = Math.floor(calcTimeHours); //apvalinam valandas iki artimiausio sveiko skaiciaus (zemyn)
    calcTimeMins = (calcTimeHours - roundedHours) * 60; //atimam is tarpiniu valandu apvalintas valandas ir dauginam is 60, kad gautume minutes
    roundedMins = Math.round(calcTimeMins);//apvalinam minutes iki artimiausio sveiko skaiciaus 

    return roundedHours + `h ir ` + roundedMins + `min`; 
}

console.log(laikas(15,10,14,0))
console.log(laikas(14,10,15,0))

console.clear();

//Uzduotis #2:
console.log("Uzduotis #2:")

function armstrong() {
    let arr = []
    for(let i = 100; i < 1000; i++){
        let stringNum = i.toString();
        if(i === stringNum[0]**3 + stringNum[1]**3 + stringNum[2]**3 ) {
            arr.push(stringNum);
        }
    }
    return arr;
}

console.log(armstrong());
console.clear();

//Uzduotis #3:
console.log("Uzduotis #3:")

function distanceBetweenTwoCoords(x1, y1, x2, y2){
    return Math.sqrt(((x2-x1)**2)+((y2-y1)**2));
}

console.log(distanceBetweenTwoCoords(1,2,1,5))  //atsakymas: 3
console.clear();

//Uzduotis #4:
console.log("Uzduotis #4:")
function evenAndOdd(num) {
    let counterEven = 0;
    let counterOdd = 0;
    let numStr = num.toString();
        for(let i = 0 ; i < numStr.length; i++) {
            number = parseInt(numStr[i]);
        if(number % 2 === 0) {
            counterEven++;
        } else {
            counterOdd++;
        }
    }
    return  counterEven + ' skaiciai lyginiai, ' + counterOdd + ' nelyginiai'; 
}

console.log(evenAndOdd(63258));
console.clear();

//Uzduotis #5:
console.log("Uzduotis #5:")

function plyteles(ilgis, plotis){
    let kvadratura = (ilgis * plotis) + ((ilgis*plotis/100))*5;
    let pakuotes = Math.ceil(kvadratura / 1.5);
    return (pakuotes * 23) + ' eur';
}
console.log(plyteles(5,5));
console.clear();

//Uzduotis #6:
console.log("Uzduotis #6:")

function randomMasyvoVidurkiai() {
    let arr = [];
    while(arr.length < 30) {
        arr.push(Math.floor(Math.random()*11))
    }
    // sortedArray = arr.sort(function(a,b){return a-b});
    sortedArray = arr.sort((a,b) => a-b); //su arrow 
    return 'Maziausias: ' + sortedArray[0] + '\n' + 'Didziausias: ' + sortedArray[sortedArray.length-1];
}

console.log(randomMasyvoVidurkiai());
console.clear();


//Uzduotis #7:
console.log("Uzduotis #7:")
function litai(suma){
    let penki = 0;
    let du = 0;
    let vienas = 0;

    penki = Math.floor(suma / 5);

    if(suma - (penki * 5) > 0) {
        tarpinis = suma - (penki*5);
        du = Math.floor(tarpinis / 2);
        if(tarpinis - (du *2) > 0) {
            vienas = tarpinis-du;
        }
    }



    //  if(suma - (penki * 5) > 0) {
    //     tarpinis = suma - (penki*5);
    //     du = Math.floor(tarpinis / 2);
    //     if(tarpinis - (du *2) > 0) {
    //         vienas = tarpinis-du;
    //     }
    // }

    return penki + du + vienas;




}
console.log(litai(58));