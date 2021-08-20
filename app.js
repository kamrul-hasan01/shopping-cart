function updateProduct(product, price, isIncrease) {
    const updateInput = document.getElementById(product + '-number');
    let productNumber = updateInput.value;
    if (isIncrease) {
        productNumber = parseInt(productNumber) + 1;


    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }

    updateInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();


}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal / 10;

    const totalAmount = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalAmount;


}



document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 1219, false);
})





document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 59, false)

})