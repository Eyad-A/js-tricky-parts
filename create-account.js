function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN";
      return `$${amount}`;
    },
    deposit(inputPin, newAmount) {
      if (inputPin !== pin) return "invalid PIN";
      amount =+ newAmount;
      return `You have successfully deposited $${newAmount}. Your current balance is ${amount}`;
    },
    withdraw(inputPin, withdrawAmount) {
      if (inputPin !== pin) return "invalid PIN";
      if (withdrawAmount > amount) return "You don't have that kind of money";
      amount -= withdrawAmount;
      return `Successfully withdrew $${withdrawAmount}. Your new balance is $${amount}`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid pin";
      pin = newPin;
      return "PIN successfully changed!";
    }
  };
}

module.exports = { createAccount };
