const sumArr = []
// const userQuantity = document.getElementById('item-value')

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