const inputNum = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-button")
let lengthOutput = document.getElementById("length-conversion")
let volumeOutput = document.getElementById("volume-conversion")
let massOutput = document.getElementById("mass-conversion")

function lengthConvert() {
    let meter = inputNum.value
    let feet = (inputNum.value * 3.28084).toFixed(3)
    let returnString = `${meter} meters = ${feet} feet   |   `
    feet = inputNum.value
    meter = (feet / 3.28084).toFixed(3)
    returnString += `${feet} feet = ${meter} meters`
    lengthOutput.textContent = returnString
}

function volumeConvert() {
    let liters = inputNum.value
    let gallons = (inputNum.value * 0.264172).toFixed(3)
    let returnString = `${liters} liters = ${gallons} gallons   |   `
    gallons = inputNum.value
    liters = (gallons / 0.264172).toFixed(3)
    returnString += `${gallons} gallons = ${liters} liters`
    volumeOutput.textContent = returnString
}

function massConvert() {
    let kilos = inputNum.value
    let pounds = (inputNum.value * 2.20462262185).toFixed(3)
    let returnString = `${kilos} kilos = ${pounds} pounds   |   `
    pounds = inputNum.value
    kilos = (pounds / 2.20462262185).toFixed(3)
    returnString += `${pounds} pounds = ${kilos} kilos`
    massOutput.textContent = returnString
}


convertBtn.addEventListener("click", function() {
    lengthConvert()
    volumeConvert()
    massConvert()
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



