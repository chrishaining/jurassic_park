const Park = function (name, price, collectionOfDinosaurs) {
  this.name = name;
  this.price = price;
  this.collectionOfDinosaurs = collectionOfDinosaurs

}

Park.prototype.addDinosaurToTollection = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur)
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

  let topDinosaur = this.collection_of_dinosaurs[0];
  for (dinosaur of this.collection_of_dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > topDinosaur.guestsAttractedPerDay) {
      topDinosaur = dinosaur
    }
  }
  return topDinosaur

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

// function to calculate total takings for a day.
// looking in the collection_of_dinosaurs array, find all the values of guestsAttractedPerDay. sum these, then multiply by ticket price (11.50)
Park.prototype.total_takings_per_day = function () {
  let numberOfTickets = 0;
  for (dinosaur of this.collection_of_dinosaurs) {
    numberOfTickets += dinosaur.guestsAttractedPerDay;
  }
  let takings = numberOfTickets * this.price
  return takings
};

Park.prototype.total_visitors_per_day = function () {
  let totalVisitors = 0;
  for (dinosaur of this.collection_of_dinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalVisitors
};

Park.prototype.total_visitors_per_year = function () {
  return this.total_visitors_per_day() * 12;

};

Park.prototype.total_revenue_for_one_year = function () {
  return this.total_takings_per_day() * 12;
};

Park.prototype.removeSpecies = function (species) {
  for (i = 0; i < this.collectionOfDinosaurs.length; i ++) {
    if ( this.collectionOfDinosaurs[i].species === species) {
      this.collectionOfDinosaurs.splice(i, 1);
      i--;
    }
  }
    console.log(this.collectionOfDinosaurs);
  };


module.exports = Park;
