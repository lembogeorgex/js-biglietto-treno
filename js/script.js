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
    document.getElementById("target").innerText = (finalPrice.toFixed(2))

}
else if (userAge > 65) {
    discountSeniorPrice = standardPrice * 40 / 100
    finalPrice = (standardPrice - discountSeniorPrice)
    console.log(finalPrice.toFixed(2))
    document.getElementById("target").innerText = (finalPrice.toFixed(2))


}
else{
    console.log(standardPrice.toFixed(2))
    document.getElementById("target").innerText = (finalPrice.toFixed(2))
}


