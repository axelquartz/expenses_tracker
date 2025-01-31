// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

const displayIncome = document.querySelector('.display-income');
const displayName = document.querySelector('.display-name');
let storeValues = []

function loadFromFirebase() {
    onValue(ref(database, 'expenses'), (snapshot) => {
      const data = snapshot.val() || {};
      console.log('Data', data);

      data.expenses.forEach(el => {
        storeValues.push(el)
      });

      console.log('Push Values', storeValues);
      console.log('Data', data);
      

      
    //   storeValues .push(data.quantity)

    //   storeValues.push(data.quantity);
    displayName.textContent = 'Expenses';
    displayIncome.textContent = data.expenses || 0;
    });
  }


  // Initial load
loadFromFirebase();