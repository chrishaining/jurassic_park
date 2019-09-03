const Park = function (name, price, collection_of_dinosaurs) {
  this.name = name;
  this.price = price;
  this.collectionOfDinosaurs = collection_of_dinosaurs

}

Park.prototype.addDinosaurToCollection = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaurFromCollection = function (dinosaur) {
  this.collectionOfDinosaurs.pop(dinosaur)
};

Park.prototype.findMostPopularDinosaur = function () {
  // Math.max.apply(Math, this.collection_of_dinosaurs.map(function(dinosaur) { return dinosaur.guestsAttractedPerDay; }))
  // this.collection_of_dinosaurs.sort(dinosaur.guestsAttractedPerDay)

  // for (dinosaur of this.collection_of_dinosaurs) {
  //   dinosaur.guestsAttractedPerDay
  //
  //
  // this.guestsAttractedPerDay

  // return dinosaur.species

  // Math.max(this.collection_of_dinosaurs.map)

  let topDinosaur = this.collectionOfDinosaurs[0];
  for (dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.guestsAttractedPerDay > topDinosaur.guestsAttractedPerDay) {
      topDinosaur = dinosaur
    }
  }
  return topDinosaur

};

// Math.max(this.collection_of_dinosaurs.dinosaur.guestsAttractedPerDay)

Park.prototype.findSpecies = function (species) {
  // this.collection_of_dinosaurs.find(dinosaur.species === species);
  let foundSpecies = [];
  for (dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.species === species) {
      foundSpecies.push(dinosaur)
    }
  }
  return foundSpecies
};

// function to calculate total takings for a day.
// looking in the collection_of_dinosaurs array, find all the values of guestsAttractedPerDay. sum these, then multiply by ticket price (11.50)
Park.prototype.totalTakingsPerDay = function () {
  let numberOfTickets = 0;
  for (dinosaur of this.collectionOfDinosaurs) {
    numberOfTickets += dinosaur.guestsAttractedPerDay;
  }
  let takings = numberOfTickets * this.price
  return takings
};

Park.prototype.totalVisitorsPerDay = function () {
  let totalVisitors = 0;
  for (dinosaur of this.collectionOfDinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalVisitors
};

Park.prototype.totalVisitorsPerYear = function () {
  return this.totalVisitorsPerDay() * 12;

};

Park.prototype.totalRevenueForOneYear = function () {
  return this.totalTakingsPerDay() * 12;
};

module.exports = Park;
