const path = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync(
  path.join(__dirname, 'dataset.json'),
  'utf-8',
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.map(account => account.amount >= 100000);
}
function datasetWithRoundedDollar() {
  return bankBalances.map(account => ({ ...account, rounded: Math.round((account.amount)) }));
}

function sumOfBankBalances() {
  const sumOfBalances = bankBalances.map(account => +account.amount)
    .reduce((previousAmount, currentAmount) => previousAmount + currentAmount, 0);
  return sumOfBalances.toFixed(2);
}

function sumOfInterests() {
  const sumOfInterest = bankBalances.filter(account => (account.state === 'WI' || account.state === 'IL' || account.state === 'WY' || account.state === 'OH' || account.state === 'GA' || account.state === 'DE'))
    .map(account => Math.round(parseFloat(account.amount) * 18.9) / 100)
    .reduce((previousAmount, currentAmount) => previousAmount + currentAmount, 0);
  return sumOfInterest.toFixed(2);
}

function higherStateSums() {
  const stateAmountMap = {};
  bankBalances.forEach(account => {
    // eslint-disable-next-line max-len
    stateAmountMap[account.state] = stateAmountMap[account.state] ? stateAmountMap[account.state] + Number(account.amount) : +account.amount;
  });
  return Object.values(stateAmountMap).filter(amount => amount >= 1000000)
    .reduce((previousAmount, currentAmount) => previousAmount + currentAmount, 0);
}

// test cases
export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
