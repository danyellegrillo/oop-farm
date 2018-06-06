class Animal {
  constructor(age) {
    this.age = age
  }
    getWeightInKg() {
      return Math.min(this.age*this.agenumber, this.weight)
    }
    getValueInEuros(){
      return this.getWeightInKg()*this.price
    }
}


class Pig extends Animal {
  constructor(...args) {
      super(...args)
      this.price = 4
      this.weight = 700
      this.agenumber = 2.3
    }
  }
class Cow extends Animal {
  constructor(...args) {
      super(...args)
      this.price = 5
      this.weight = 1200
      this.agenumber = 1.5
    }
  }
class Horse extends Animal {
  constructor(...args) {
      super(...args)
      this.price = 10
      this.weight = 1000
      this.agenumber = 1.7
    }
  }

  module.exports = { Animal, Pig, Cow, Horse }
