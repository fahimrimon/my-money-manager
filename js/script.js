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
  const totalExpensesAmount = totalExpenses.innerText = parseFloat(foodAmount + rentAmount + clothesAmount);

  // balance innertext section
  const balance = document.getElementById('balance');
  const balanceText = parseFloat(balance.innerText);
  balance.innerText = parseFloat(incomeAmount - totalExpensesAmount);
})

// Saving Section 
document.getElementById('save-button').addEventListener('click', function () {
  const saveInput = document.getElementById('save-input');
  const saveAmount = parseFloat(saveInput.value);
  saveInput.value = '';
})

