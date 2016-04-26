function setDivisor(denomination) {
  switch (denomination) {
    case "ONE HUNDRED":
      return 100;
      break;
    case "TWENTY":
      return 20;
      break;
    case "TEN":
      return 10;
      break;
    case "FIVE":
      return 5;
      break;
    case "ONE":
      return 1;
      break;
    case "QUARTER":
      return 0.25;
      break;
    case "DIME":
      return 0.1;
      break;
    case "NICKEL":
      return 0.05;
      break;
    case "PENNY":
      return 0.01;
      break;
    default:
      break;
  }
}

function checkChange(change) {
  var changeAvailable = 0;

  for (var i = 0; i < change.length; i++) {
    changeAvailable += change[i][1];
  }

  return changeAvailable;
}

function checkCashRegister(price, cash, cid) {
  var change = [];
  var changeDue = cash - price;

  var changeAvailable = checkChange(cid);

  if (changeDue > changeAvailable) {
    console.log("Insufficient Funds");
    return "Insufficient Funds";
  } else if (changeDue === changeAvailable) {
    console.log("Closed");
    return "Closed";
  } else {
    cid.reverse();
    console.log("price: $", price.toFixed(2));
    console.log("cash: $", cash.toFixed(2));
    console.log("change available: $", changeAvailable.toFixed(2));
    console.log("change due: $", changeDue.toFixed(2));
    console.log("cid: ", cid);
    cid.forEach(function(denomination){
      var divisor = setDivisor(denomination[0]);
      // make sure section isn't empty
      if ( (denomination[1] / divisor) > 0 && (changeDue / divisor) > 1 ) {
        var denominationAvailable = denomination[1] / divisor;
        var denominationNeeded = changeDue / divisor;

        var denominationTaken;
        if (denominationNeeded < denominationAvailable) {
          denominationTaken = Math.floor(denominationNeeded);
        } else {
          denominationTaken = Math.floor(denominationAvailable);
        }
        var changeTaken = denominationTaken * divisor;
        changeTaken = +changeTaken.toFixed(2);
        console.log("change due: $" + changeDue);
        console.log("Checking the " + divisor + " drawer.");
        change.push([denomination[0], changeTaken]);
        console.log("changeDue / divisor: " + (changeDue / divisor) );
        console.log("change taken: " + changeTaken);
        changeDue = changeDue - changeTaken;
        changeDue = +changeDue.toFixed(2);
      }
    });

    if (changeDue > 0) {
      console.log("Insufficient Funds");
      return "Insufficient Funds";
    } else {
      console.log(change);
      return change;
    }
  }
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

/*

Exact Change
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".

*/
