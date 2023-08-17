document.getElementById('deposit-btn').addEventListener('click', deposit)

document.getElementById('deposit-field').addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        deposit();
    }
})

function deposit(){
    const depositField = document.getElementById('deposit-field');
    const depositString = depositField.value;
    const newDeposit = parseFloat(depositString);
    depositField.value = '';
    if(isNaN(newDeposit)){
        alert('Please give a number!');
        return;
    }
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositTotal = previousDepositTotal + newDeposit;

    depositTotalElement.innerText = currentDepositTotal;

    //balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDeposit;

    balanceTotalElement.innerText = currentBalanceTotal;

    
}
