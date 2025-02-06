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
const displayRecommendations = document.getElementById('display-recommendations');
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
      
      if (storeExpensesValues.length < 15) {
        acomulatedExpenses = storeExpensesValues.reduce((a, b) => a + b, 0); 
        console.log(`${acomulatedExpenses} (${storeExpensesValues.length})`);
        displayTotalExpensesName.textContent = 'Expenses Acomulated';
        displayTotalExpenses.textContent = acomulatedExpenses;
        console.log('acomulatedExpenses in for loop', acomulatedExpenses);
      }
      
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

      if (storeRevenueValues.length < 15) {
        acomulatedRevenue = storeRevenueValues.reduce((a, b) => a + b, 0); 
        console.log(`${acomulatedRevenue} (${storeRevenueValues.length})`);
        displayTotalRevenueName.textContent = 'Revenue Acomulated';
        displayTotalRevenue.textContent = acomulatedRevenue;
        
      }

    displayRevenueName.textContent = 'Revenue List';
    displayRevenue.textContent = data.revenue || 0;
    });
  }

  // Initial load
  loadExpensesFromFirebase();
  loadRevenueFromFirebase();

  // Calculate Revenue
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
  }, 1000);
  
    // const openai = new OpenAI({
    //         baseURL: 'https://api.deepseek.com',
    //         apiKey: '5cc5169a3a7d4115affb67f599b4b440'
    // });
    
    // async function main() {
    //   const completion = await openai.chat.completions.create({
    //     messages: [{ role: "system", content: "You are a helpful assistant." }],
    //     model: "deepseek-chat",
    //   });
    
    //   console.log(completion.choices[0].message.content);
    // }
    
    // main();

    async function sendDataToBackend(data) {
      const endpoint = 'http://localhost:3000/api/recommendations'; // Your backend endpoint
  
      try {
          const response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const result = await response.json();
          return result;
      } catch (error) {
          console.error('Error:', error);
          throw error;
      }
  }
  
  // Example data
  const businessData = {
      revenue: 1000,
      expenses: 600,
      profit: 400,
  };
  
  sendDataToBackend(businessData)
      .then(recommendations => {
          // Process the recommendations
          displayRecommendations.textContent = recommendations;
          console.log('Recommendations:', recommendations);
      })
      .catch(error => {
          // Handle errors  
          displayRecommendations.textContent = error.message;
          console.error('Error:', error);
      });