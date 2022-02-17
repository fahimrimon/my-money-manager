// calculate button handler
document.getElementById('calculate-button').addEventListener('click', function () {
  // income input 
  const incomeInput = document.getElementById('income-input');
  const incomeAmount = parseFloat(incomeInput.value);
  incomeInput.value = '';

  // Food input 
  const foodInput = document.getElementById('food-input');
  const foodAmount = parseFloat(foodInput.value);
  foodInput.value = '';

  // Rent input
  const rentInput = document.getElementById('rent-input');
  const rentAmount = parseFloat(rentInput.value);
  rentInput.value = '';

  // Clothes input
  const clothesInput = document.getElementById('clothes-input');
  const clothesAmount = parseFloat(clothesInput.value);
  clothesInput.value = '';

  // Total expenses
  const totalExpenses = document.getElementById('total-expenses');
  const totalExpensesText = parseFloat(totalExpenses.innerText);
  totalExpenses.innerText = parseFloat(foodAmount + rentAmount + clothesAmount);
  const totalExpensesAmount = totalExpenses.innerText;

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
  const balance = document.getElementById('balance');
  const balanceAmount = balance.innerText;
  saving.innerText = parseFloat((saveAmount / 100) * balanceAmount);
  const savingAmount = saving.innerText;

  // Remaining Balance section -2 
  const remainingBalance = document.getElementById('remaining-balance');
  remainingBalance.innerText = parseFloat(balanceAmount - savingAmount);

})

