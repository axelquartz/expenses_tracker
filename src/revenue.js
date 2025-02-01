// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

// Values to be saved
let storeValues = [8,6]
let sumArr = []

const calcBtn = document.querySelector('.calc-btn')
const resetBtn = document.querySelector('.reset-btn')
const total = document.querySelector('#total h2')
const submitRevenueBtn = document.querySelector('.submit-revenue-btn')

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

  saveToFirebase()


