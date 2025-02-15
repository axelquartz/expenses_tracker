// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

const displayExpenses = document.querySelector('.display-expenses');
const displayExpensesName = document.querySelector('.display-expenses-name');
const displayRevenue = document.querySelector('.display-revenue');
const displayRevenueName = document.querySelector('.display-revenue-name');
const displayTotalExpenses = document.querySelector('.display-total-expenses');
const displayTotalExpensesName = document.querySelector('.display-total-expenses-name');
const displayTotalRevenue = document.querySelector('.display-total-revenue');
const displayTotalRevenueName = document.querySelector('.display-total-revenue-name');
const displayProfitabilityPercentage = document.getElementById('display-profitability-percentage');
const displayDifference = document.getElementById('display-difference');
let storeExpensesValues = []
let storeRevenueValues = []
let acomulatedExpenses = 0; // Declare outside
let acomulatedRevenue = 0;

function loadExpensesFromFirebase() {
    onValue(ref(database, 'expenses'), (snapshot) => {
      const data = snapshot.val() || {};
      console.log('Data', data);

      data.expenses.forEach(el => {
        storeExpensesValues.push(el)

      });

      console.log('storeExpensesValues', storeExpensesValues);
      console.log('storeRevenueValues', storeRevenueValues);
      
        acomulatedExpenses = storeExpensesValues.reduce((a, b) => a + b, 0); 
        console.log(`${acomulatedExpenses} (${storeExpensesValues.length})`);
        displayTotalExpensesName.textContent = 'Expenses Acomulated';
        displayTotalExpenses.textContent = acomulatedExpenses;
        console.log('acomulatedExpenses in for loop', acomulatedExpenses);
      
      console.log('acomulatedExpenses in function out of for loop', acomulatedExpenses);

    displayExpensesName.textContent = 'Expenses List';
    displayExpenses.textContent = data.expenses || 0;

    });
  }

  function loadRevenueFromFirebase() {
    onValue(ref(database, 'revenue'), (snapshot) => {
      const data = snapshot.val() || {};
      console.log('Data', data);

      data.revenue.forEach(el => {
        storeRevenueValues.push(el)

      });

        acomulatedRevenue = storeRevenueValues.reduce((a, b) => a + b, 0); 
        console.log(`${acomulatedRevenue} (${storeRevenueValues.length})`);
        displayTotalRevenueName.textContent = 'Revenue Acomulated';
        displayTotalRevenue.textContent = acomulatedRevenue;
        


    displayRevenueName.textContent = 'Revenue List';
    displayRevenue.textContent = data.revenue || 0;
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
  
