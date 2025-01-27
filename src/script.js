const sumArr = []
// const userQuantity = document.getElementById('item-value')
const calcBtn = document.querySelector('.calc-btn')
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
const userBonelessQuantity = document.getElementById('user-boneless-quantity')

const boneless = new Item ({
    name: 'Boneless',
    unitPrice: 155,
    userQuantity: userBonelessQuantity,
})

bonelessAddBtn.addEventListener('click', boneless.calcPrice)

// Alitas
const alitasAddBtn = document.getElementById('alitas-add-btn')
const userAlitasQuantity = document.getElementById('user-alitas-quantity')

const alitas = new Item ({
    name: 'Alitas',
    unitPrice: 75,
    userQuantity: userAlitasQuantity,
})

alitasAddBtn.addEventListener('click', alitas.calcPrice)

// Dedos de Queso
const dedosAddBtn = document.getElementById('dedos-add-btn')
const userDedosQuantity = document.getElementById('user-dedos-quantity')

const dedos = new Item ({
    name: 'Dedos de Queso',
    unitPrice: 120,
    userQuantity: userDedosQuantity,
})

dedosAddBtn.addEventListener('click', dedos.calcPrice)

// Papas Francesas
const francesasAddBtn = document.getElementById('francesas-add-btn')
const userFrancesasQuantity = document.getElementById('user-francesas-quantity')

const francesas = new Item ({
    name: 'Papas Francesas',
    unitPrice: 160,
    userQuantity: userFrancesasQuantity,
})

francesasAddBtn.addEventListener('click', francesas.calcPrice)

// Papas Gajo
const gajoAddBtn = document.getElementById('gajo-add-btn')
const userGajoQuantity = document.getElementById('user-gajo-quantity')

const gajo = new Item ({
    name: 'Papas Gajo',
    unitPrice: 165,
    userQuantity: userGajoQuantity,
})

gajoAddBtn.addEventListener('click', gajo.calcPrice)

// Salchicha
const salchichaAddBtn = document.getElementById('salchicha-add-btn')
const userSalchichaQuantity = document.getElementById('user-salchicha-quantity')

const salchicha = new Item ({
    name: 'Salchicha',
    unitPrice: 100,
    userQuantity: userSalchichaQuantity,
})

function displayTotal() {
    const sum = sumArr.reduce((acc, curr) => acc + curr)
    total.textContent = `Total is: ${sum}`  
}

salchichaAddBtn.addEventListener('click', salchicha.calcPrice)

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