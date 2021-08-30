function formatCurrency(amount) {
  if (amount < 0) {
    return "-" + formatCurrency(-amount);
  }
  return "$" + amount.toFixed(2);
}

function getCoins(cents) {
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  let changeLeft = cents;
  while (changeLeft > 0) {
    if (changeLeft >= 25) {
      changeLeft -= 25;
      quarters++;
    } else if (changeLeft >= 10) {
      changeLeft -= 10;
      dimes++;
    } else if (changeLeft >= 5) {
      changeLeft -= 5;
      nickels++;
    } else if (changeLeft >= 1) {
      changeLeft -= 1;
      pennies++;
    }
  }
  return {
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies
  };
}

module.exports = { getCoins, formatCurrency };