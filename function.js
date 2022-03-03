//function for inputfield

function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const newInput = parseFloat(inputField.value);
    //clear input
    inputField.value = '';
    return newInput;
}

function updateField(fieldId, updateAmount) {

    const fieldTotal = document.getElementById(fieldId);
    const previousField = fieldTotal.innerText;
    const newFieldTotal = parseFloat(previousField) + parseFloat(updateAmount);
    fieldTotal.innerText = newFieldTotal;
}
// get current balance for proper error handling
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    return previousBalance
}
function updateBalance(amount, isAdd) {

    const balanceTotal = document.getElementById('balance-total');

    if (isAdd == true) {
        balanceTotal.innerText = getCurrentBalance() + amount;
    }
    else {
        balanceTotal.innerText = getCurrentBalance() - amount;
    }

}
//handle deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    const deposit = getInput('deposit-input');
    //error handle
    if (deposit > 0) {
        updateField('deposit-total', deposit);
        updateBalance(deposit, true);
    }
    else {
        alert('put proper input')
    }

})

//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdraw = getInput('withdraw-input');
    // error handle
    if (withdraw > 0 && withdraw < getCurrentBalance()) {
        updateField('withdraw-total', withdraw);
        updateBalance(withdraw, false);
    }
    else {
        alert('your balance is not sufficient')
    }
})