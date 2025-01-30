// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

// Save all quantities to Firebase
function saveToFirebase() {
    const items = {
      boneless: userBonelessQuantity.value || 0,
      alitas: userAlitasQuantity.value || 0,
      dedos: userDedosQuantity.value || 0,
      francesas: userFrancesasQuantity.value || 0,
      gajo: userGajoQuantity.value || 0,
      salchicha: userSalchichaQuantity.value || 0,
      crema: userCremaQuantity.value || 0,
      mayonesa: userMayonesaQuantity.value || 0,
      catsup: userCatsupQuantity.value || 0,
      mostaza: userMostazaQuantity.value || 0,
      ranch: userRanchQuantity.value || 0,
      buffalo: userBuffaloQuantity.value || 0,
      bbq: userBbqQuantity.value || 0,
      mango: userMangoQuantity.value || 0,
      cueritos: userCueritosQuantity.value || 0,
      elotes: userElotesQuantity.value || 0
    };
    
    set(ref(database, 'expenses'), items);
  }

  // Load quantities from Firebase
function loadFromFirebase() {
    onValue(ref(database, 'expenses'), (snapshot) => {
      const data = snapshot.val() || {};
      
      userBonelessQuantity.value = data.boneless || 0;
      userAlitasQuantity.value = data.alitas || 0;
      userDedosQuantity.value = data.dedos || 0;
      userFrancesasQuantity.value = data.francesas || 0;
      userGajoQuantity.value = data.gajo || 0;
      userSalchichaQuantity.value = data.salchicha || 0;
      userCremaQuantity.value = data.crema || 0;
      userMayonesaQuantity.value = data.mayonesa || 0;
      userCatsupQuantity.value = data.catsup || 0;
      userMostazaQuantity.value = data.mostaza || 0;
      userRanchQuantity.value = data.ranch || 0;
      userBuffaloQuantity.value = data.buffalo || 0;
      userBbqQuantity.value = data.bbq || 0;
      userMangoQuantity.value = data.mango || 0;
      userCueritosQuantity.value = data.cueritos || 0;
      userElotesQuantity.value = data.elotes || 0;
    });
  }

  // Initial load
loadFromFirebase();

let sumArr = []
// const userQuantity = document.getElementById('item-value')
const calcBtn = document.querySelector('.calc-btn')
const resetBtn = document.querySelector('.reset-btn')
const total = document.querySelector('#total h2')

// Item template
class Item {
    constructor({name, unitPrice, userQuantity, calcPrice}) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.userQuantity = userQuantity;
        this.calcPrice = function() {
            const result = userQuantity.value * unitPrice;
            sumArr.push(result)
            console.log(sumArr);
            
        }
    }
}

// Boneless
const bonelessAddBtn = document.getElementById('boneless-add-btn')
const bonelessRemoveBtn = document.getElementById('boneless-remove-btn')
const userBonelessQuantity = document.getElementById('user-boneless-quantity')

const boneless = new Item ({
    name: 'Boneless',
    unitPrice: 155,
    userQuantity: userBonelessQuantity,
})

bonelessAddBtn.addEventListener('click', function() {
    userBonelessQuantity.value++
    saveToFirebase();
})

bonelessRemoveBtn.addEventListener('click', function() {
    if (userBonelessQuantity.value > 0) {
        userBonelessQuantity.value--
        saveToFirebase();
    }
})

// Alitas
const alitasAddBtn = document.getElementById('alitas-add-btn')
const alitasRemoveBtn = document.getElementById('alitas-remove-btn')
const userAlitasQuantity = document.getElementById('user-alitas-quantity')

const alitas = new Item ({
    name: 'Alitas',
    unitPrice: 75,
    userQuantity: userAlitasQuantity,
})

alitasAddBtn.addEventListener('click', function() {
    userAlitasQuantity.value++
    saveToFirebase();
})

alitasRemoveBtn.addEventListener('click', function() {
    if (userAlitasQuantity.value > 0) {
        userAlitasQuantity.value--
        saveToFirebase();
    }
})

// Dedos de Queso
const dedosAddBtn = document.getElementById('dedos-add-btn')
const dedosRemoveBtn = document.getElementById('dedos-remove-btn')
const userDedosQuantity = document.getElementById('user-dedos-quantity')

const dedos = new Item ({
    name: 'Dedos de Queso',
    unitPrice: 120,
    userQuantity: userDedosQuantity,
})

dedosAddBtn.addEventListener('click', function() {
    userDedosQuantity.value++
    saveToFirebase();
})

dedosRemoveBtn.addEventListener('click', function() {
    if (userDedosQuantity.value > 0) {
        userDedosQuantity.value--
        saveToFirebase();
    }
})

// Papas Francesas
const francesasAddBtn = document.getElementById('francesas-add-btn')
const francesasRemoveBtn = document.getElementById('francesas-remove-btn')
const userFrancesasQuantity = document.getElementById('user-francesas-quantity')

const francesas = new Item ({
    name: 'Papas Francesas',
    unitPrice: 160,
    userQuantity: userFrancesasQuantity,
})

francesasAddBtn.addEventListener('click', function() {
    userFrancesasQuantity.value++
    saveToFirebase();
})

francesasRemoveBtn.addEventListener('click', function() {
    if (userFrancesasQuantity.value > 0) {
        userFrancesasQuantity.value--
        saveToFirebase();
    }
})

// Papas Gajo
const gajoAddBtn = document.getElementById('gajo-add-btn')
const gajoRemoveBtn = document.getElementById('gajo-remove-btn')
const userGajoQuantity = document.getElementById('user-gajo-quantity')

const gajo = new Item ({
    name: 'Papas Gajo',
    unitPrice: 165,
    userQuantity: userGajoQuantity,
})

gajoAddBtn.addEventListener('click', function() {
    userGajoQuantity.value++
    saveToFirebase();
})

gajoRemoveBtn.addEventListener('click', function() {
    if (userGajoQuantity.value > 0) {
        userGajoQuantity.value--
        saveToFirebase();
    }
})

// Salchicha
const salchichaAddBtn = document.getElementById('salchicha-add-btn')
const salchichaRemoveBtn = document.getElementById('salchicha-remove-btn')
const userSalchichaQuantity = document.getElementById('user-salchicha-quantity')

const salchicha = new Item ({
    name: 'Salchicha',
    unitPrice: 100,
    userQuantity: userSalchichaQuantity,
})

salchichaAddBtn.addEventListener('click', function() {
    userSalchichaQuantity.value++
    saveToFirebase();
})

salchichaRemoveBtn.addEventListener('click', function() {
    if (userSalchichaQuantity.value > 0) {
        userSalchichaQuantity.value--
        saveToFirebase();
    }
})

// Crema
const cremaAddBtn = document.getElementById('crema-add-btn')
const cremaRemoveBtn = document.getElementById('crema-remove-btn')
const userCremaQuantity = document.getElementById('user-crema-quantity')

const crema = new Item ({
    name: 'Crema',
    unitPrice: 25,
    userQuantity: userCremaQuantity,
})

cremaAddBtn.addEventListener('click', function() {
    userCremaQuantity.value++
    saveToFirebase();
})

cremaRemoveBtn.addEventListener('click', function() {
    if (userCremaQuantity.value > 0) {
        userCremaQuantity.value--
        saveToFirebase();
    }
})

// Mayonesa
const mayonesaAddBtn = document.getElementById('mayonesa-add-btn')
const mayonesaRemoveBtn = document.getElementById('mayonesa-remove-btn')
const userMayonesaQuantity = document.getElementById('user-mayonesa-quantity')

const mayonesa = new Item ({
    name: 'Mayonesa',
    unitPrice: 25,
    userQuantity: userMayonesaQuantity,
})

mayonesaAddBtn.addEventListener('click', function() {
    userMayonesaQuantity.value++
    saveToFirebase();
})

mayonesaRemoveBtn.addEventListener('click', function() {
    if (userMayonesaQuantity.value > 0) {
        userMayonesaQuantity.value--
        saveToFirebase();
    }
})

// Catsup
const catsupAddBtn = document.getElementById('catsup-add-btn')
const catsupRemoveBtn = document.getElementById('catsup-remove-btn')
const userCatsupQuantity = document.getElementById('user-catsup-quantity')

const catsup = new Item ({
    name: 'Catsup',
    unitPrice: 25,
    userQuantity: userCatsupQuantity,
})

catsupAddBtn.addEventListener('click', function() {
    userCatsupQuantity.value++
    saveToFirebase();
})

catsupRemoveBtn.addEventListener('click', function() {
    if (userCatsupQuantity.value > 0) {
        userCatsupQuantity.value--
        saveToFirebase();
    }
})

// Mostaza
const mostazaAddBtn = document.getElementById('mostaza-add-btn')
const mostazaRemoveBtn = document.getElementById('mostaza-remove-btn')
const userMostazaQuantity = document.getElementById('user-mostaza-quantity')

const mostaza = new Item ({
    name: 'Mostaza',
    unitPrice: 20,
    userQuantity: userMostazaQuantity,
})

mostazaAddBtn.addEventListener('click', function() {
    userMostazaQuantity.value++
    saveToFirebase();
})

mostazaRemoveBtn.addEventListener('click', function() {
    if (userMostazaQuantity.value > 0) {
        userMostazaQuantity.value--
        saveToFirebase();
    }
})

// Ranch
const ranchAddBtn = document.getElementById('ranch-add-btn')
const ranchRemoveBtn = document.getElementById('ranch-remove-btn')
const userRanchQuantity = document.getElementById('user-ranch-quantity')

const ranch = new Item ({
    name: 'Ranch',
    unitPrice: 70,
    userQuantity: userRanchQuantity,
})

ranchAddBtn.addEventListener('click', function() {
    userRanchQuantity.value++
    saveToFirebase();
})

ranchRemoveBtn.addEventListener('click', function() {
    if (userRanchQuantity.value > 0) {
        userRanchQuantity.value--
        saveToFirebase();
    }
})

// Buffalo
const buffaloAddBtn = document.getElementById('buffalo-add-btn')
const buffaloRemoveBtn = document.getElementById('buffalo-remove-btn')
const userBuffaloQuantity = document.getElementById('user-buffalo-quantity')

const buffalo = new Item ({
    name: 'Buffalo',
    unitPrice: 50,
    userQuantity: userBuffaloQuantity,
})

buffaloAddBtn.addEventListener('click', function() {
    userBuffaloQuantity.value++
    saveToFirebase();
})

buffaloRemoveBtn.addEventListener('click', function() {
    if (userBuffaloQuantity.value > 0) {
        userBuffaloQuantity.value--
        saveToFirebase();
    }   
})

// BBQ
const bbqAddBtn = document.getElementById('bbq-add-btn')
const bbqRemoveBtn = document.getElementById('bbq-remove-btn')
const userBbqQuantity = document.getElementById('user-bbq-quantity')

const bbq = new Item ({
    name: 'BBQ',
    unitPrice: 50,
    userQuantity: userBbqQuantity,
})

bbqAddBtn.addEventListener('click', function() {
    userBbqQuantity.value++
    saveToFirebase();
})

bbqRemoveBtn.addEventListener('click', function() {
    if (userBbqQuantity.value > 0) {
        userBbqQuantity.value--
        saveToFirebase();
    }
})

// Mango Habanero
const mangoAddBtn = document.getElementById('mango-add-btn')
const mangoRemoveBtn = document.getElementById('mango-remove-btn')
const userMangoQuantity = document.getElementById('user-mango-quantity')

const mango = new Item ({
    name: 'Mango Habanero',
    unitPrice: 50,
    userQuantity: userMangoQuantity,
})

mangoAddBtn.addEventListener('click', function() {
    userMangoQuantity.value++
    saveToFirebase();
})

mangoRemoveBtn.addEventListener('click', function() {
    if (userMangoQuantity.value > 0) {
        userMangoQuantity.value--
        saveToFirebase();
    }
})

// Cueritos
const cueritosAddBtn = document.getElementById('cueritos-add-btn')
const cueritosRemoveBtn = document.getElementById('cueritos-remove-btn')
const userCueritosQuantity = document.getElementById('user-cueritos-quantity')

const cueritos = new Item ({
    name: 'Cueritos',
    unitPrice: 30,
    userQuantity: userCueritosQuantity,
})

cueritosAddBtn.addEventListener('click', function() {
    userCueritosQuantity.value++
    saveToFirebase();
})

cueritosRemoveBtn.addEventListener('click', function() {
    if (userCueritosQuantity.value > 0) {
        userCueritosQuantity.value--
        saveToFirebase();
    }
})

// Elotes
const elotesAddBtn = document.getElementById('elotes-add-btn')
const elotesRemoveBtn = document.getElementById('elotes-remove-btn')
const userElotesQuantity = document.getElementById('user-elotes-quantity')

const elotes = new Item ({
    name: 'Elotes',
    unitPrice: 120,
    userQuantity: userElotesQuantity,
})

elotesAddBtn.addEventListener('click', function() {
    userElotesQuantity.value++
    saveToFirebase();
})

elotesRemoveBtn.addEventListener('click', function() {
    if (userElotesQuantity.value > 0) {
        userElotesQuantity.value--
        saveToFirebase();
    }
})

// Display Total
function displayTotal() {
    const sum = sumArr.reduce((acc, curr) => acc + curr)
    total.textContent = `Total is: ${sum}`  
    const resultToJson = JSON.stringify(sum)
    localStorage.setItem('total', resultToJson)
    console.log(`Result: ${resultToJson}, Resultt`);
}
//Calc SumArr
calcBtn.addEventListener('click', function() {
    if (sumArr.length === 0) {
        console.log('Empty mode');
        
        boneless.calcPrice()
        alitas.calcPrice()
        dedos.calcPrice()
        francesas.calcPrice()
        gajo.calcPrice()
        salchicha.calcPrice()
        crema.calcPrice()
        mayonesa.calcPrice()
        catsup.calcPrice()
        mostaza.calcPrice()
        ranch.calcPrice()
        buffalo.calcPrice()
        bbq.calcPrice()
        mango.calcPrice()
        cueritos.calcPrice()
        elotes.calcPrice()
        displayTotal()
    }else {
        console.log('Normal mode');
    displayTotal()
    }
})

// Reset
resetBtn.addEventListener('click', function() {
    sumArr = []
    total.textContent = '--' 
    userBonelessQuantity.value = '';
    userAlitasQuantity.value = '';
    userDedosQuantity.value = '';
    userFrancesasQuantity.value = '';
    userGajoQuantity.value = '';
    userSalchichaQuantity.value = '';
    userCremaQuantity.value = '';
    userMayonesaQuantity.value = '';
    userCatsupQuantity.value = '';
    userMostazaQuantity.value = '';
    userRanchQuantity.value = '';
    userBuffaloQuantity.value = '';
    userBbqQuantity.value = '';
    userMangoQuantity.value = '';
    userCueritosQuantity.value = '';
    userElotesQuantity.value = '';

      // Reset Firebase data
  update(ref(database, 'expenses'), {
    boneless: 0,
    alitas: 0,
    dedos: 0,
    francesas: 0,
    gajo: 0,
    salchicha: 0,
    crema: 0,
    mayonesa: 0,
    catsup: 0,
    mostaza: 0,
    ranch: 0,
    buffalo: 0,
    bbq: 0,
    mango: 0,
    cueritos: 0,
    elotes: 0
  });
})

// Dark mode
const darkModeToggle = document.querySelector('.dark-mode-toggle')
const rootElement = document.documentElement;

darkModeToggle.addEventListener('click', function() {
    const currentTheme = rootElement.getAttribute('data-theme')
    if (currentTheme === 'dark') {
        localStorage.removeItem('dark')
        rootElement.removeAttribute('data-theme')
    } else {
        localStorage.setItem('dark', 'dark')
        rootElement.setAttribute('data-theme', 'dark')
    }
    }
)

const savedTheme = localStorage.getItem('dark')
if (savedTheme === 'dark') {
    rootElement.setAttribute('data-theme', savedTheme)
    console.log(savedTheme);
}