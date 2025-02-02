// Import Firebase from the initialization file
import { database, ref, set, onValue } from './firebase-init.js';

// Load quantities from Firebase
function loadFromFirebase() {
        onValue(ref(database, 'revenue'), (snapshot) => {
            const data = snapshot.val() || {};
            console.log('Data', data);

            data.revenue.forEach(el => {
                storeValues.push(el)
            });

            console.log('Push Values', storeValues);
        });
    }

loadFromFirebase();

// Values to be saved
let storeValues = []
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

// Boneless Mediano
const bonelessMedianoAddBtn = document.getElementById('boneless-mediano-add-btn')
const bonelessMedianoRemoveBtn = document.getElementById('boneless-mediano-remove-btn')
const userBonelessMedianoQuantity = document.getElementById('user-boneless-mediano-quantity')

const bonelessMediano = new Item ({
    name: 'Boneless Mediano',
    unitPrice: 110,
    userQuantity: userBonelessMedianoQuantity,
})

bonelessMedianoAddBtn.addEventListener('click', function() {
    userBonelessMedianoQuantity.value++
})

bonelessMedianoRemoveBtn.addEventListener('click', function() {
    if (userBonelessMedianoQuantity.value > 0) {
        userBonelessMedianoQuantity.value--
    }
})


// Boneless Chico
const bonelessChicoAddBtn = document.getElementById('boneless-chico-add-btn')
const bonelessChicoRemoveBtn = document.getElementById('boneless-chico-remove-btn')
const userBonelessChicoQuantity = document.getElementById('user-boneless-chico-quantity')

const bonelessChico = new Item ({
    name: 'Boneless Chico',
    unitPrice: 100,
    userQuantity: userBonelessChicoQuantity,
})

bonelessChicoAddBtn.addEventListener('click', function() {
    userBonelessChicoQuantity.value++
})

bonelessChicoRemoveBtn.addEventListener('click', function() {
    if (userBonelessChicoQuantity.value > 0) {
        userBonelessChicoQuantity.value--
    }
})

// Alitas Grande
const alitasGrandeAddBtn = document.getElementById('alitas-grande-add-btn')
const alitasGrandeRemoveBtn = document.getElementById('alitas-grande-remove-btn')
const userAlitasGrandeQuantity = document.getElementById('user-alitas-grande-quantity')

const alitasGrande = new Item ({
    name: 'Alitas Grande',
    unitPrice: 150,
    userQuantity: userAlitasGrandeQuantity,
})

alitasGrandeAddBtn.addEventListener('click', function() {
    userAlitasGrandeQuantity.value++
})

alitasGrandeRemoveBtn.addEventListener('click', function() {
    if (userAlitasGrandeQuantity.value > 0) {
        userAlitasGrandeQuantity.value--
    }
})

// Alitas Mediano
const alitasMedianoAddBtn = document.getElementById('alitas-mediano-add-btn')
const alitasMedianoRemoveBtn = document.getElementById('alitas-mediano-remove-btn')
const userAlitasMedianoQuantity = document.getElementById('user-alitas-mediano-quantity')

const alitasMediano = new Item ({
    name: 'Alitas Mediano',
    unitPrice: 140,
    userQuantity: userAlitasMedianoQuantity,
})

alitasMedianoAddBtn.addEventListener('click', function() {
    userAlitasMedianoQuantity.value++
})

alitasMedianoRemoveBtn.addEventListener('click', function() {
    if (userAlitasMedianoQuantity.value > 0) {
        userAlitasMedianoQuantity.value--
    }
})

// Alitas Chico
const alitasChicoAddBtn = document.getElementById('alitas-chico-add-btn')
const alitasChicoRemoveBtn = document.getElementById('alitas-chico-remove-btn')
const userAlitasChicoQuantity = document.getElementById('user-alitas-chico-quantity')

const alitasChico = new Item ({
    name: 'Alitas Chico',
    unitPrice: 130,
    userQuantity: userAlitasChicoQuantity,
})

alitasChicoAddBtn.addEventListener('click', function() {
    userAlitasChicoQuantity.value++
})

alitasChicoRemoveBtn.addEventListener('click', function() {
    if (userAlitasChicoQuantity.value > 0) {
        userAlitasChicoQuantity.value--
    }
})

// Dedos de Queso Grande
const dedosGrandeAddBtn = document.getElementById('dedos-grande-add-btn')
const dedosGrandeRemoveBtn = document.getElementById('dedos-grande-remove-btn')
const userDedosGrandeQuantity = document.getElementById('user-dedos-grande-quantity')

const dedosGrande = new Item ({
    name: 'Dedos de Queso Grande',
    unitPrice: 180,
    userQuantity: userDedosGrandeQuantity,
})

dedosGrandeAddBtn.addEventListener('click', function() {
    userDedosGrandeQuantity.value++
})

dedosGrandeRemoveBtn.addEventListener('click', function() {
    if (userDedosGrandeQuantity.value > 0) {
        userDedosGrandeQuantity.value--
    }
})

// Dedos de Queso Mediano
const dedosMedianoAddBtn = document.getElementById('dedos-mediano-add-btn')
const dedosMedianoRemoveBtn = document.getElementById('dedos-mediano-remove-btn')
const userDedosMedianoQuantity = document.getElementById('user-dedos-mediano-quantity')

const dedosMediano = new Item ({
    name: 'Dedos de Queso Mediano',
    unitPrice: 170,
    userQuantity: userDedosMedianoQuantity,
})

dedosMedianoAddBtn.addEventListener('click', function() {
    userDedosMedianoQuantity.value++
})

dedosMedianoRemoveBtn.addEventListener('click', function() {
    if (userDedosMedianoQuantity.value > 0) {
        userDedosMedianoQuantity.value--
    }
})

// Dedos de Queso Chico
const dedosChicoAddBtn = document.getElementById('dedos-chico-add-btn')
const dedosChicoRemoveBtn = document.getElementById('dedos-chico-remove-btn')
const userDedosChicoQuantity = document.getElementById('user-dedos-chico-quantity')

const dedosChico = new Item ({
    name: 'Dedos de Queso Chico',
    unitPrice: 160,
    userQuantity: userDedosChicoQuantity,
})

dedosChicoAddBtn.addEventListener('click', function() {
    userDedosChicoQuantity.value++
})

dedosChicoRemoveBtn.addEventListener('click', function() {
    if (userDedosChicoQuantity.value > 0) {
        userDedosChicoQuantity.value--
    }
})

// Tostilocos
const tostilocosAddBtn = document.getElementById('tostilocos-add-btn')
const tostilocosRemoveBtn = document.getElementById('tostilocos-remove-btn')
const userTostilocosQuantity = document.getElementById('user-tostilocos-quantity')

const tostilocos = new Item ({
    name: 'Tostilocos',
    unitPrice: 200,
    userQuantity: userTostilocosQuantity,
})

tostilocosAddBtn.addEventListener('click', function() {
    userTostilocosQuantity.value++
})

tostilocosRemoveBtn.addEventListener('click', function() {
    if (userTostilocosQuantity.value > 0) {
        userTostilocosQuantity.value--
    }
})

// Tostielotes
const tostielotesAddBtn = document.getElementById('tostielotes-add-btn')
const tostielotesRemoveBtn = document.getElementById('tostielotes-remove-btn')
const userTostielotesQuantity = document.getElementById('user-tostielotes-quantity')

const tostielotes = new Item ({
    name: 'Tostielotes',
    unitPrice: 250,
    userQuantity: userTostielotesQuantity,
})

tostielotesAddBtn.addEventListener('click', function() {
    userTostielotesQuantity.value++
})

tostielotesRemoveBtn.addEventListener('click', function() {
    if (userTostielotesQuantity.value > 0) {
        userTostielotesQuantity.value--
    }
})

// Banderilla sin queso
const banderillaSinQuesoAddBtn = document.getElementById('banderilla-sin-queso-add-btn')
const banderillaSinQuesoRemoveBtn = document.getElementById('banderilla-sin-queso-remove-btn')
const userBanderillaSinQuesoQuantity = document.getElementById('user-banderilla-sin-queso-quantity')

const banderillaSinQueso = new Item ({
    name: 'Banderilla sin Queso',
    unitPrice: 300,
    userQuantity: userBanderillaSinQuesoQuantity,
})

banderillaSinQuesoAddBtn.addEventListener('click', function() {
    userBanderillaSinQuesoQuantity.value++
})

banderillaSinQuesoRemoveBtn.addEventListener('click', function() {
    if (userBanderillaSinQuesoQuantity.value > 0) {
        userBanderillaSinQuesoQuantity.value--
    }
})

// Banderilla con queso
const banderillaConQuesoAddBtn = document.getElementById('banderilla-con-queso-add-btn')
const banderillaConQuesoRemoveBtn = document.getElementById('banderilla-con-queso-remove-btn')
const userBanderillaConQuesoQuantity = document.getElementById('user-banderilla-con-queso-quantity')

const banderillaConQueso = new Item ({
    name: 'Banderilla con Queso',
    unitPrice: 300,
    userQuantity: userBanderillaConQuesoQuantity,
})

banderillaConQuesoAddBtn.addEventListener('click', function() {
    userBanderillaConQuesoQuantity.value++
})

banderillaConQuesoRemoveBtn.addEventListener('click', function() {
    if (userBanderillaConQuesoQuantity.value > 0) {
        userBanderillaConQuesoQuantity.value--
    }
})

// Elote sin crema
const eloteSinCremaAddBtn = document.getElementById('elote-sin-crema-add-btn')
const eloteSinCremaRemoveBtn = document.getElementById('elote-sin-crema-remove-btn')
const userEloteSinCremaQuantity = document.getElementById('user-elote-sin-crema-quantity')

const eloteSinCrema = new Item ({
    name: 'Elote sin Crema',
    unitPrice: 300,
    userQuantity: userEloteSinCremaQuantity,
})

eloteSinCremaAddBtn.addEventListener('click', function() {
    userEloteSinCremaQuantity.value++
})

eloteSinCremaRemoveBtn.addEventListener('click', function() {
    if (userEloteSinCremaQuantity.value > 0) {
        userEloteSinCremaQuantity.value--
    }
})

// Elote con crema
const eloteConCremaAddBtn = document.getElementById('elote-con-crema-add-btn')
const eloteConCremaRemoveBtn = document.getElementById('elote-con-crema-remove-btn')
const userEloteConCremaQuantity = document.getElementById('user-elote-con-crema-quantity')

const eloteConCrema = new Item ({
    name: 'Elote con Crema',
    unitPrice: 300,
    userQuantity: userEloteConCremaQuantity,
})

eloteConCremaAddBtn.addEventListener('click', function() {
    userEloteConCremaQuantity.value++
})

eloteConCremaRemoveBtn.addEventListener('click', function() {
    if (userEloteConCremaQuantity.value > 0) {
        userEloteConCremaQuantity.value--
    }
})

// Combinados grande
const combinadoGrandeAddBtn = document.getElementById('combinado-grande-add-btn')
const combinadoGrandeRemoveBtn = document.getElementById('combinado-grande-remove-btn')
const userCombinadoGrandeQuantity = document.getElementById('user-combinado-grande-quantity')

const combinadoGrande = new Item ({
    name: 'Combinado Grande',
    unitPrice: 300,
    userQuantity: userCombinadoGrandeQuantity,
})

combinadoGrandeAddBtn.addEventListener('click', function() {
    userCombinadoGrandeQuantity.value++
})

combinadoGrandeRemoveBtn.addEventListener('click', function() {
    if (userCombinadoGrandeQuantity.value > 0) {
        userCombinadoGrandeQuantity.value--
    }
})

// Combinados mediano
const combinadoMedianoAddBtn = document.getElementById('combinado-mediano-add-btn')
const combinadoMedianoRemoveBtn = document.getElementById('combinado-mediano-remove-btn')
const userCombinadoMedianoQuantity = document.getElementById('user-combinado-mediano-quantity')

const combinadoMediano = new Item ({
    name: 'Combinado Mediano',
    unitPrice: 300,
    userQuantity: userCombinadoMedianoQuantity,
})

combinadoMedianoAddBtn.addEventListener('click', function() {
    userCombinadoMedianoQuantity.value++
})

combinadoMedianoRemoveBtn.addEventListener('click', function() {
    if (userCombinadoMedianoQuantity.value > 0) {
        userCombinadoMedianoQuantity.value--
    }
})

// Combinados chico
const combinadoChicoAddBtn = document.getElementById('combinado-chico-add-btn')
const combinadoChicoRemoveBtn = document.getElementById('combinado-chico-remove-btn')
const userCombinadoChicoQuantity = document.getElementById('user-combinado-chico-quantity')

const combinadoChico = new Item ({
    name: 'Combinado Chico',
    unitPrice: 300,
    userQuantity: userCombinadoChicoQuantity,
})

combinadoChicoAddBtn.addEventListener('click', function() {
    userCombinadoChicoQuantity.value++
})

combinadoChicoRemoveBtn.addEventListener('click', function() {
    if (userCombinadoChicoQuantity.value > 0) {
        userCombinadoChicoQuantity.value--
    }
})

// Dip
const dipAddBtn = document.getElementById('dip-add-btn')    
const dipRemoveBtn = document.getElementById('dip-remove-btn')
const userDipQuantity = document.getElementById('user-dip-quantity')

const dip = new Item ({
    name: 'Dip',
    unitPrice: 300,
    userQuantity: userDipQuantity,
})

dipAddBtn.addEventListener('click', function() {
    userDipQuantity.value++
})

dipRemoveBtn.addEventListener('click', function() {
    if (userDipQuantity.value > 0) {
        userDipQuantity.value--
    }
})

// Refresco
const refrescoAddBtn = document.getElementById('refresco-add-btn')
const refrescoRemoveBtn = document.getElementById('refresco-remove-btn')
const userRefrescoQuantity = document.getElementById('user-refresco-quantity')

const refresco = new Item ({
    name: 'Refresco',
    unitPrice: 300,
    userQuantity: userRefrescoQuantity,
})

refrescoAddBtn.addEventListener('click', function() {
    userRefrescoQuantity.value++
})

refrescoRemoveBtn.addEventListener('click', function() {
    if (userRefrescoQuantity.value > 0) {
        userRefrescoQuantity.value--
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

// customAddBtn.addEventListener('click', function() {
//     custom.customCalcPrice()
// })

// Save to DB
function saveToFirebase(val) {
    storeValues.push(val)

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
        bonelessMediano.calcPrice()
        bonelessChico.calcPrice()
        alitasGrande.calcPrice()
        alitasMediano.calcPrice()
        alitasChico.calcPrice()
        dedosGrande.calcPrice()
        dedosMediano.calcPrice()
        dedosChico.calcPrice()
        tostilocos.calcPrice()
        tostielotes.calcPrice()
        banderillaSinQueso.calcPrice()
        banderillaConQueso.calcPrice()
        eloteSinCrema.calcPrice()
        eloteConCrema.calcPrice()
        combinadoGrande.calcPrice()
        combinadoMediano.calcPrice()
        combinadoChico.calcPrice()
        dip.calcPrice()
        refresco.calcPrice()
        custom.customCalcPrice()
        displayTotal()
        
    }else {
        console.log('Normal mode');
    displayTotal()
    }
})

// Submit Revenue to DB
submitRevenueBtn.addEventListener('click', function() {
    const sum = sumArr.reduce((a, b) => a + b, 0);
    saveToFirebase(sum)
})

// Reset
resetBtn.addEventListener('click', function() {
    sumArr = []
    total.textContent = '--' 
    userBonelessGrandeQuantity.value = '';
    userCustomPrice.value = '';

    
})

