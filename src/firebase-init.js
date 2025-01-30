// Import Firebase modules from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Your Firebase config (replace with your actual values)
const firebaseConfig = {
    apiKey: "AIzaSyDaHmRXwRRIKqBWM_VIVV6Sdhsp9Qx-EYE",
    authDomain: "profitability-tracker-f5eac.firebaseapp.com",
    databaseURL: "https://profitability-tracker-f5eac-default-rtdb.firebaseio.com",
    projectId: "profitability-tracker-f5eac",
    storageBucket: "profitability-tracker-f5eac.firebasestorage.app",
    messagingSenderId: "139368537452",
    appId: "1:139368537452:web:fbf366650499137df8e749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export Firebase for use in other files
export { database, ref, set, onValue };