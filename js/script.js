// Console check
console.log("JS OK");


// Mod targeting element
const targetElement = document.getElementById("target");
console.log(targetElement)

// Kilometers check
const userKM = parseInt(prompt("Inserire il numero di chilometri" ,"50"))

// Age Check
const userAge = parseInt(prompt("Inserire l'età del passeggero", "25"))



// Calcolo del prezzo standard
const  standardPrice = (userKM * 0.21)
// Calcolo dello sconto 
let discountYoungPrice
let discountSeniorprice
if (userAge < 18) {
    discountYoungPrice = standardPrice * 20 / 100
}
else if (userAge > 65) {
    discountSeniorPrice = standardPrice * 40 / 100
}

// Applicazione dello sconto
let finalPrice
if (userAge < 18) {
  finalprice = (standardPrice - discountYoungPrice)
  console.log(finalPrice)
}
else if (userAge > 65) {
    finalprice = (standardPrice - discountSeniorPrice)
    console.log(finalPrice)
}
else{
    console.log(standardPrice)
}