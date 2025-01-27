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