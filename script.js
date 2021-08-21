const defaultPrice = document.getElementById('default-price')
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrices = document.getElementsByClassName('total-price');
//change total price
function changeTotalPrice() {
    const memoryCostNumber = parseInt(extraMemoryCost.innerText);
    const storageCostNumber = parseInt(extraStorageCost.innerText);
    const deliveryChargeNumber = parseInt(deliveryCharge.innerText);
    const defaultPriceNumber = parseInt(defaultPrice.innerText)
    for (let totalPrice of totalPrices) {
        totalPrice.innerText = memoryCostNumber + storageCostNumber + deliveryChargeNumber + defaultPriceNumber;
    }
}
//change memory cost 
function changeMemoryCost(cost) {
    extraMemoryCost.innerText = cost;
    changeTotalPrice()
}
//change storage cost
function changeStorageCost(cost) {
    extraStorageCost.innerText = cost;
    changeTotalPrice()
}
//change delivery charge
function changeDeliveryCharge(cost) {
    deliveryCharge.innerText = cost;
    changeTotalPrice()
}
// promoCode
function applyCode() {
    let code = document.getElementById('code-input').value;
    if (code == "stevekaku") {
        for (let totalPrice of totalPrices) {
            totalPrice.innerText = parseInt(totalPrice.innerText) / 100 * 80
        }
        document.getElementById('apply-button').classList.add('disabled');
    }
}