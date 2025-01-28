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
})

bonelessRemoveBtn.addEventListener('click', function() {
    if (userBonelessQuantity.value > 0) {
        userBonelessQuantity.value--
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
})

alitasRemoveBtn.addEventListener('click', function() {
    if (userAlitasQuantity.value > 0) {
        userAlitasQuantity.value--
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
})

dedosRemoveBtn.addEventListener('click', function() {
    if (userDedosQuantity.value > 0) {
        userDedosQuantity.value--
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
})

francesasRemoveBtn.addEventListener('click', function() {
    if (userFrancesasQuantity.value > 0) {
        userFrancesasQuantity.value--
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
})

gajoRemoveBtn.addEventListener('click', function() {
    if (userGajoQuantity.value > 0) {
        userGajoQuantity.value--
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
})

salchichaRemoveBtn.addEventListener('click', function() {
    if (userSalchichaQuantity.value > 0) {
        userSalchichaQuantity.value--
    }
})

// Crema
const cremaAddBtn = document.getElementById('crema-add-btn')
const cremaRemoveBtn = document.getElementById('crema-remove-btn')
const userCremaQuantity = document.getElementById('user-crema-quantity')

const crema = new Item ({
    name: 'Crema',
    unitPrice: 50,
    userQuantity: userCremaQuantity,
})

cremaAddBtn.addEventListener('click', function() {
    userCremaQuantity.value++
})

cremaRemoveBtn.addEventListener('click', function() {
    if (userCremaQuantity.value > 0) {
        userCremaQuantity.value--
    }
})

// Mayonesa
const mayonesaAddBtn = document.getElementById('mayonesa-add-btn')
const mayonesaRemoveBtn = document.getElementById('mayonesa-remove-btn')
const userMayonesaQuantity = document.getElementById('user-mayonesa-quantity')

const mayonesa = new Item ({
    name: 'Mayonesa',
    unitPrice: 50,
    userQuantity: userMayonesaQuantity,
})

mayonesaAddBtn.addEventListener('click', function() {
    userMayonesaQuantity.value++
})

mayonesaRemoveBtn.addEventListener('click', function() {
    if (userMayonesaQuantity.value > 0) {
        userMayonesaQuantity.value--
    }
})

// Catsup
const catsupAddBtn = document.getElementById('catsup-add-btn')
const catsupRemoveBtn = document.getElementById('catsup-remove-btn')
const userCatsupQuantity = document.getElementById('user-catsup-quantity')

const catsup = new Item ({
    name: 'Catsup',
    unitPrice: 50,
    userQuantity: userCatsupQuantity,
})

catsupAddBtn.addEventListener('click', function() {
    userCatsupQuantity.value++
})

catsupRemoveBtn.addEventListener('click', function() {
    if (userCatsupQuantity.value > 0) {
        userCatsupQuantity.value--
    }
})

// Mostaza
const mostazaAddBtn = document.getElementById('mostaza-add-btn')
const mostazaRemoveBtn = document.getElementById('mostaza-remove-btn')
const userMostazaQuantity = document.getElementById('user-mostaza-quantity')

const mostaza = new Item ({
    name: 'Mostaza',
    unitPrice: 50,
    userQuantity: userMostazaQuantity,
})

mostazaAddBtn.addEventListener('click', function() {
    userMostazaQuantity.value++
})

mostazaRemoveBtn.addEventListener('click', function() {
    if (userMostazaQuantity.value > 0) {
        userMostazaQuantity.value--
    }
})

// Ranch
const ranchAddBtn = document.getElementById('ranch-add-btn')
const ranchRemoveBtn = document.getElementById('ranch-remove-btn')
const userRanchQuantity = document.getElementById('user-ranch-quantity')

const ranch = new Item ({
    name: 'Ranch',
    unitPrice: 50,
    userQuantity: userRanchQuantity,
})

ranchAddBtn.addEventListener('click', function() {
    userRanchQuantity.value++
})

ranchRemoveBtn.addEventListener('click', function() {
    if (userRanchQuantity.value > 0) {
        userRanchQuantity.value--
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
})

buffaloRemoveBtn.addEventListener('click', function() {
    if (userBuffaloQuantity.value > 0) {
        userBuffaloQuantity.value--
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
})

bbqRemoveBtn.addEventListener('click', function() {
    if (userBbqQuantity.value > 0) {
        userBbqQuantity.value--
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
})

mangoRemoveBtn.addEventListener('click', function() {
    if (userMangoQuantity.value > 0) {
        userMangoQuantity.value--
    }
})

// Cueritos
const cueritosAddBtn = document.getElementById('cueritos-add-btn')
const cueritosRemoveBtn = document.getElementById('cueritos-remove-btn')
const userCueritosQuantity = document.getElementById('user-cueritos-quantity')

const cueritos = new Item ({
    name: 'Cueritos',
    unitPrice: 50,
    userQuantity: userCueritosQuantity,
})

cueritosAddBtn.addEventListener('click', function() {
    userCueritosQuantity.value++
})

cueritosRemoveBtn.addEventListener('click', function() {
    if (userCueritosQuantity.value > 0) {
        userCueritosQuantity.value--
    }
})

// Elotes
const elotesAddBtn = document.getElementById('elotes-add-btn')
const elotesRemoveBtn = document.getElementById('elotes-remove-btn')
const userElotesQuantity = document.getElementById('user-elotes-quantity')

const elotes = new Item ({
    name: 'Elotes',
    unitPrice: 50,
    userQuantity: userElotesQuantity,
})

elotesAddBtn.addEventListener('click', function() {
    userElotesQuantity.value++
})

elotesRemoveBtn.addEventListener('click', function() {
    if (userElotesQuantity.value > 0) {
        userElotesQuantity.value--
    }
})

// Display Total
function displayTotal() {
    const sum = sumArr.reduce((acc, curr) => acc + curr)
    total.textContent = `Total is: ${sum}`  
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
})