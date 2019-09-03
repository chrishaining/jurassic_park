const Park = function (name, price, collection_of_dinosaurs) {
  this.name = name;
  this.price = price;
  this.collection_of_dinosaurs = collection_of_dinosaurs

}

Park.prototype.add_dinosaur_to_collection = function (dinosaur) {
  this.collection_of_dinosaurs.push(dinosaur)
};

Park.prototype.remove_dinosaur_from_collection = function (dinosaur) {
  this.collection_of_dinosaurs.pop(dinosaur)
};

Park.prototype.find_most_popular_dinosaur = function () {
  // Math.max.apply(Math, this.collection_of_dinosaurs.map(function(dinosaur) { return dinosaur.guestsAttractedPerDay; }))
  // this.collection_of_dinosaurs.sort(dinosaur.guestsAttractedPerDay)

  // for (dinosaur of this.collection_of_dinosaurs) {
  //   dinosaur.guestsAttractedPerDay
  //
  //
  // this.guestsAttractedPerDay

  // return dinosaur.species

  // Math.max(this.collection_of_dinosaurs.map)

  let foundDinosaur = this.collection_of_dinosaurs[0];
    for (dinosaur of this.collection_of_dinosaurs) {
      if (dinosaur.guestsAttractedPerDay > foundDinosaur.guestsAttractedPerDay) {
        foundDinosaur = dinosaur
      }
    }
      return foundDinosaur

  };

  // Math.max(this.collection_of_dinosaurs.dinosaur.guestsAttractedPerDay)

  Park.prototype.find_species = function (species) {
  // this.collection_of_dinosaurs.find(dinosaur.species === species);
  let foundSpecies = [];
  for (dinosaur of this.collection_of_dinosaurs) {
    if (dinosaur.species === species) {
      foundSpecies.push(dinosaur)
    }
  }
  return foundSpecies
};







  module.exports = Park;
