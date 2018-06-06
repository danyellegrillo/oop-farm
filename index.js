class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }
  calculateIncome(crop) {
   let crops = this.crops
    .map(crop => crop.getYieldInEuros())
    .reduce((a,b) => a + b, 0)
    let animals = this.animals
    .map(animal => animal.getValueInEuros())
    .reduce((a,b) => a + b, 0)
    return crops + animals
  }
  addAnimal(animal){
    this.animals.push(animal)
  }
}
module.exports.Farm = Farm
