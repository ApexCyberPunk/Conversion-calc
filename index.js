/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertF = document.getElementById("convertF")

let inputNum = document.getElementById("inputNum")
const meter2ft = document.getElementById("meter2Ft")
const liter2gal = document.getElementById("liter2Gal")
const kilo2lb = document.getElementById("kilo2Lb")

convertF.addEventListener('click', function() {
    
    meter2ft.innerHTML = `${inputNum.value} meters = ${(inputNum.value * 3.281).toFixed(3)} feet | ${inputNum.value} feet = ${(inputNum.value / 3.281).toFixed(3)} meters` 
    
    liter2gal.innerHTML =  `${inputNum.value} liters = ${(inputNum.value * 0.264172).toFixed(3)} gallons |  ${inputNum.value} gallons = ${(inputNum.value / 0.264172).toFixed(3)} liters `
     
      kilo2lb.innerHTML = `${inputNum.value} kilos = ${(inputNum.value*2.20462).toFixed(3)} pounds |  ${inputNum.value} pounds = ${(inputNum.value/2.20462).toFixed(3)} kilos`
     
     
    
    
});



