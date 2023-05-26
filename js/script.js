// Console check
console.log("JS OK");


// Mod targeting element
document.getElementById("price")
document.getElementById("youngPrice");
document.getElementById("seniorPrice");
document.getElementById("noDiscount");

console.log(price)
console.log(youngPrice)
console.log(seniorPrice)


// Kilometers check
const userKM = parseInt(prompt("Inserire il numero di chilometri" ,"50"))

// Age Check
const userAge = parseInt(prompt("Inserire l'età del passeggero", "25"))



// Calcolo del prezzo standard
const standardPrice = (userKM * 0.21)



// Calcolo dello sconto  e del prezzo finale
let discountYoungPrice
let discountSeniorprice
let finalPrice
if (userAge < 18) {
    discountYoungPrice = standardPrice * 20 / 100
    // Calcolo prezzo finale 
    finalPrice = (standardPrice - discountYoungPrice)
    console.log(finalPrice.toFixed(2))
    document.getElementById("youngPrice").innerText = ("Congratulazioni, hai diritto ad uno sconto del 20%! Il tuo prezzo finale è di €" + finalPrice.toFixed(2))
document.getElementById("price").innerText = ("Questo sarebbe stato il costo del tuo ticket senza lo sconto: €" + standardPrice.toFixed(2));

}
else if (userAge > 65) {
    discountSeniorPrice = standardPrice * 40 / 100
    finalPrice = (standardPrice - discountSeniorPrice)
    console.log(finalPrice.toFixed(2))
    document.getElementById("seniorPrice").innerText = ("Congratulazioni, hai diritto ad uno sconto del 40%! Il tuo prezzo finale è di € " + finalPrice.toFixed(2))
document.getElementById("price").innerText = ("Questo sarebbe stato il costo del tuo ticket senza lo sconto: €" + standardPrice.toFixed(2));


}
else{
    console.log(standardPrice.toFixed(2))
    document.getElementById("noDiscount").innerText= ("Spiacente, non hai diritto ad uno sconto, il tuo costo è di € " + standardPrice.toFixed(2))
}


