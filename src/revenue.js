// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

let testArr = [2,4,17,9]

function saveToFirebase() {
    const revenue = {
        revenue: testArr,
    };
    
    set(ref(database, 'revenue'), revenue);
    // storeValues.push(val)
    console.log('revenue to store', revenue);
    // return storeValues
    
  }

  saveToFirebase()