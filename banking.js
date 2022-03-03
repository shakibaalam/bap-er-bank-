//handle deposit button

document.getElementById('deposit-button').addEventListener('click', function () {

    //get the amount to be deposited

    const depositInput = document.getElementById('deposit-input');
    const newDeposit = depositInput.value;

    //update deposit total

    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDeposit) + parseFloat(newDeposit);
    depositTotal.innerText = newDepositTotal;

    //update balance total

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalance) + parseFloat(newDeposit);
    balanceTotal.innerText = newBalanceTotal;

    //clear the input

    depositInput.value = '';
})

//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    //get the amount to be withdraw

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdraw = withdrawInput.value;

    //update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdraw) + parseFloat(newWithdraw);
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance total

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalance) - parseFloat(newWithdraw);
    balanceTotal.innerText = newBalanceTotal;

    //clear the input

    withdrawInput.value = '';
})