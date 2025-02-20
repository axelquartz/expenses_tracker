// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

const displayExpenses = document.querySelector('.display-expenses');
const displayRevenue = document.querySelector('.display-revenue');
const displayTotalExpenses = document.querySelector('.display-total-expenses');
const displayTotalRevenue = document.querySelector('.display-total-revenue');
const displayTotalDays = document.querySelector('.display-total-days');
const displayProfitabilityPercentage = document.getElementById('display-profitability-percentage');
const displayDifference = document.getElementById('display-difference');
let storeExpensesValues = []
let storeRevenueValues = []
let acomulatedExpenses = 0; // Declare outside
let acomulatedRevenue = 0;
const expensesArrayData = document.createElement('p');
const revenueArrayData = document.createElement('p');

displayExpenses.appendChild(expensesArrayData);
displayRevenue.appendChild(revenueArrayData);

function loadExpensesFromFirebase() {
    onValue(ref(database, 'expenses'), (snapshot) => {
      const data = snapshot.val() || {};
      console.log('Data', data);

      data.expenses.forEach(el => {
        storeExpensesValues.push(el)
        expensesArrayData.innerHTML += `<li>${el}</li>`;
      });

      console.log('storeExpensesValues', storeExpensesValues);
      console.log('storeRevenueValues', storeRevenueValues);
      
        acomulatedExpenses = storeExpensesValues.reduce((a, b) => a + b, 0); 
        console.log(`${acomulatedExpenses} (${storeExpensesValues.length})`);
        displayTotalExpenses.textContent = acomulatedExpenses;
        console.log('acomulatedExpenses in for loop', acomulatedExpenses);
      
      console.log('acomulatedExpenses in function out of for loop', acomulatedExpenses);

    // arrayData.textContent = data.expenses || 0;

    });
  }

  function loadRevenueFromFirebase() {
    onValue(ref(database, 'revenue'), (snapshot) => {
      const data = snapshot.val() || {};
      console.log('Data', data);

      data.revenue.forEach(el => {
        storeRevenueValues.push(el)
        revenueArrayData.innerHTML += `<li>${el}</li>`;
      });

        acomulatedRevenue = storeRevenueValues.reduce((a, b) => a + b, 0); 
        console.log(`${acomulatedRevenue} (${storeRevenueValues.length})`);
        displayTotalRevenue.textContent = acomulatedRevenue;
        displayTotalDays.textContent = storeRevenueValues.length
        


    // displayRevenue.textContent = data.revenue || 0;
    });
  }

  // Initial load
  loadExpensesFromFirebase();
  loadRevenueFromFirebase();

  // Calculate Profitability
  setTimeout(() => {
    let profitabilityPercentage = ((acomulatedRevenue / acomulatedExpenses) * 100) - 100;
    profitabilityPercentage = Math.round(profitabilityPercentage * 100) / 100;
    if (profitabilityPercentage > 0) {
      displayProfitabilityPercentage.textContent = '+ ' + profitabilityPercentage + ' %';
    } else if (profitabilityPercentage < 0) {
      displayProfitabilityPercentage.textContent = '- ' + profitabilityPercentage + ' %';
    } else {
      displayProfitabilityPercentage.textContent = profitabilityPercentage + ' %';
    }
    if (acomulatedRevenue - acomulatedExpenses > 0) {
      displayDifference.textContent = '+ ' + (acomulatedRevenue - acomulatedExpenses) + ' $';
    } else if (acomulatedRevenue - acomulatedExpenses < 0) {
      displayDifference.textContent = '- ' + (acomulatedRevenue - acomulatedExpenses) + ' $';
    }
  }, 1000);
  
