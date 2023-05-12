class Calculator {
  constructor() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  add(number, result) {
    return number + (this.result + result);
  }

  multi(number, result) {
    return number * (this.result + result);
  }
}
module.exports = { Calculator };
