// const dummyTransaction = [
//   { id: 1, text: "Flower", amount: -20 },
//   { id: 2, text: "Salary", amount: 300 },
//   { id: 3, text: "Books", amount: -10 },
//   { id: 4, text: "Camera", amount: -20 },
// ];

const balance = document.getElementById("balance");

const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// let Transactions = ;
const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let Transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

function addTransaction(e) {
  e.preventDefault();
  // before adding values need to check them
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add some value");
  } else {
    // create an array
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: +amount.value,
    };
    Transactions.push(transaction);
    addTransactionDOM(transaction);

    updateValues();
    updateLocalStorage();
    // resetting the form values
    text.value = "";
    amount.value = "";
  }
}
function generateId() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  //   Transactions.forEach((transaction) => {
  // if the amount is less than o - which means we need to subtract it
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">x</button>
  `;
  list.appendChild(item);
  //   });
}

function updateValues() {
  // create a new array amount
  const amounts = Transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}
// update local storage
function removeTransaction(id) {
  Transactions = Transactions.filter((transaction) => transaction.id !== id);
  updateLocalStorage();
  //   need to run init again because we want to display the values again and then
  Init();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(Transactions));
}

// Init App
function Init() {
  list.innerHTML = "";
  //   for each entry in the array dummyTransaction call the addTransactionDOM function
  Transactions.forEach(addTransactionDOM);
  //   addTransactionDOM(Transactions);
  updateValues();
}
Init();
form.addEventListener("submit", addTransaction);
// addTransactionDOM(Transactions);

// add a transaction + adding a transation to the DOM
// remove a transaction
// display the calculated values
//
