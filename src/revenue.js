// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

// Values to be saved
let storeValues = [8,6]
let sumArr = []

const calcBtn = document.querySelector('.calc-btn')
const resetBtn = document.querySelector('.reset-btn')
const total = document.querySelector('#total h2')
const submitRevenueBtn = document.querySelector('.submit-revenue-btn')

// Item template
class Item {
    constructor({name, unitPrice, userQuantity}) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.userQuantity = userQuantity;
        this.calcPrice = function() {
            const result = userQuantity.value * unitPrice;
            sumArr.push(result)
            console.log(sumArr);
        }
        this.customCalcPrice = function() {
            const customResult = 1 * userCustomPrice.value;
            sumArr.push(customResult)
            console.log(sumArr);
            
        }
    }
}

// Boneless Grande
const bonelessGrandeAddBtn = document.getElementById('boneless-grande-add-btn')
const bonelessGrandeRemoveBtn = document.getElementById('boneless-grande-remove-btn')
const userBonelessGrandeQuantity = document.getElementById('user-boneless-grande-quantity')

const bonelessGrande = new Item ({
    name: 'Boneless Grande',
    unitPrice: 125,
    userQuantity: userBonelessGrandeQuantity,
})

bonelessGrandeAddBtn.addEventListener('click', function() {
    userBonelessGrandeQuantity.value++
})

bonelessGrandeRemoveBtn.addEventListener('click', function() {
    if (userBonelessGrandeQuantity.value > 0) {
        userBonelessGrandeQuantity.value--
    }
})

// Custom
const userCustomPrice = document.getElementById('user-custom-price')
const customAddBtn = document.getElementById('custom-add-btn')

const custom = new Item ({
    name: 'Custom',
    unitPrice: userCustomPrice,
    userQuantity: 1,
})

customAddBtn.addEventListener('click', function() {
    custom.customCalcPrice()
})

// Save to DB
function saveToFirebase() {
    const revenue = {
        revenue: storeValues,
    };
    
    set(ref(database, 'revenue'), revenue);
    // storeValues.push(val)
    console.log('revenue to store', revenue);
    // return storeValues
    
  }

  // Display Total
function displayTotal() {
    const sum = sumArr.reduce((a, b) => a + b, 0);
    total.textContent = `Total is: ${sum}`  
    const resultToJson = JSON.stringify(sum)
    localStorage.setItem('total', resultToJson)
    console.log(`Result: ${resultToJson}, Resultt`);

    // saveToFirebase(sum)
    return sum
}
//Calc SumArr
calcBtn.addEventListener('click', function() {
    if (sumArr.length === 0) {
        console.log('Empty mode');
        
        bonelessGrande.calcPrice()
        // custom.customCalcPrice()
        displayTotal()
        console.log('Custom Price', userCustomPrice.value);
        
    }else {
        console.log('Normal mode');
    displayTotal()
    }
})

  saveToFirebase()


