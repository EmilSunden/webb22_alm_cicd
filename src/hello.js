class Hello {
  constructor() {
    this.result = '';
  }

  getResult() {
    return this.result;
  }

  greet(name = 'default') {
    this.result = `Hello ${name}`;
    return this.result;
  }
}

module.exports = Hello;
