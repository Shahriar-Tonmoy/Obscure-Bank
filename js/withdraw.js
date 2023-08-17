document.getElementById('withdraw-btn').addEventListener('click', withdraw);
document.getElementById('withdraw-field').addEventListener('keypress', function(event){
    if(event.keyCode ===13){
        withdraw();
    }
});


function withdraw(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    withdrawField.value = '';
    if(isNaN(newWithdraw)){
        alert('Please give a number!');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);


    //Balance Total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(previousBalanceTotal < newWithdraw){
        return alert('insufficient balance');
     }
    const currentWithdrawTotal = newWithdraw + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    const currentBalanceTotal = previousBalanceTotal - newWithdraw;

    balanceTotalElement.innerText = currentBalanceTotal;

 }