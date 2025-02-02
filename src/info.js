// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

const displayExpenses = document.querySelector('.display-expenses');
const displayExpensesName = document.querySelector('.display-expenses-name');
const displayRevenue = document.querySelector('.display-revenue');
const displayRevenueName = document.querySelector('.display-revenue-name');
let storeExpensesValues = []
let storeRevenueValues = []

function loadExpensesFromFirebase() {
    onValue(ref(database, 'expenses'), (snapshot) => {
      const data = snapshot.val() || {};
      console.log('Data', data);

      data.expenses.forEach(el => {
        storeExpensesValues.push(el)

      });

    displayExpensesName.textContent = 'Expenses';
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

    displayRevenueName.textContent = 'Revenue';
    displayRevenue.textContent = data.revenue || 0;
    });
  }


  // Initial load
  loadExpensesFromFirebase();
  loadRevenueFromFirebase();