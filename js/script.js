// Input Function
function getInputValue(value) {
  const inputField = document.getElementById(value);
  const totalAmount = parseFloat(inputField.value);
  if (totalAmount < 0) {
    alert("Please Enter a Positive Number");
  }
  else if (totalAmount >= 0) {
    return totalAmount;
  }

  inputField.value = '';
  return totalAmount;
}


// calculate button handler
document.getElementById('calculate-button').addEventListener('click', function () {

  // income input 
  const incomeAmount = getInputValue('income-input');

  // Food input 
  const foodAmount = getInputValue('food-input');

  // Rent input
  const rentAmount = getInputValue('rent-input');

  // Clothes input
  const clothesAmount = getInputValue('clothes-input');

  // Total expenses
  const totalExpenses = document.getElementById('total-expenses');
  const totalExpensesText = parseFloat(totalExpenses.innerText);
  totalExpenses.innerText = parseFloat((isNaN(foodAmount) ? 0 : +foodAmount) + (isNaN(rentAmount) ? 0 : +rentAmount) + (isNaN(clothesAmount) ? 0 : + clothesAmount));
  const totalExpensesAmount = totalExpenses.innerText;

  if (totalExpensesAmount > incomeAmount) {
    alert("Your Income Balance Low then Total Expenses!!!");
  }

  // balance innertext section
  const balance = document.getElementById('balance');
  const balanceText = parseFloat(balance.innerText);
  balance.innerText = parseFloat(incomeAmount - totalExpensesAmount);
  const balanceAmount = balance.innerText;

  // Remaining Balance section -1 
  const remainingBalance = document.getElementById('remaining-balance');
  const remainingBalanceText = parseFloat(remainingBalance.innerText);
  remainingBalance.innerText = balanceAmount;


})

// Saving Section 
document.getElementById('save-button').addEventListener('click', function () {
  const saveInput = document.getElementById('save-input');
  const saveAmount = parseFloat(saveInput.value);
  saveInput.value = '';
  // Saving Amount section 
  const saving = document.getElementById('saving-amount');
  const savingText = parseFloat(saving.innerText);
  // const balance = document.getElementById('balance');
  // const balanceAmount = balance.innerText;
  const incomeInput = document.getElementById('income-input');
  const incomeAmount = parseFloat(incomeInput.value);
  saving.innerText = parseFloat((saveAmount / 100) * incomeAmount);
  const savingAmount = saving.innerText;

  // Remaining Balance section -2 
  const balance = document.getElementById('balance');
  const balanceAmount = balance.innerText;
  const remainingBalance = document.getElementById('remaining-balance');
  remainingBalance.innerText = parseFloat(balanceAmount - savingAmount);


  if (savingAmount > balanceAmount) {
    alert("Your current balance is low");
  }
})

