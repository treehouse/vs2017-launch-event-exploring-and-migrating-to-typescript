
var Calculator = (function () {
  function Calculator(operand1, operand2) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  Calculator.prototype.add = function () {
    return this.operand1 + this.operand2;
  };

  return Calculator;
}());
