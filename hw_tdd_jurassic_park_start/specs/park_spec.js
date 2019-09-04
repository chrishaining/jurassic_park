const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur;
  let park;
  // arrange
  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('velocoraptor', 'carnivore', 30);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 10);
    park = new Park ('Eurassic Park', 11.50, [dinosaur, dinosaur1, dinosaur2])
  });

  it('should have a name', function() {
    // act
    const actual = park.name
    // arrange
    assert.strictEqual(actual, 'Eurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.price
    assert.strictEqual(actual, 11.50)

  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [dinosaur, dinosaur1, dinosaur2])
  });

  it('should be able to add a dinosaur to its collection', function() {
    const collection = park.collectionOfDinosaurs
    let dinosaur3 = ('pterodactyl', 'omnivore', 5);
    park.addDinosaurToCollection(dinosaur3)
    assert.deepStrictEqual(collection, [dinosaur, dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaurFromCollection(dinosaur2)
    const collection = park.collectionOfDinosaurs
    assert.deepStrictEqual(collection, [dinosaur, dinosaur1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findMostPopularDinosaur()
    assert.deepStrictEqual(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findSpecies('diplodocus')
    assert.deepStrictEqual(actual, [dinosaur2])

  });

//I think I might have made this test by mistake. it wasn't one of the tasks. but it is useful, so it stays
  it('should be able to calculate the total takings per day', function() {
    const actual = park.totalTakingsPerDay()
    assert.strictEqual(actual, 1035)
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 90)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.totalVisitorsPerYear()
    assert.strictEqual(actual, 1080)
  });

  it('should be able to calculate total revenue for one year', function() {
    const actual = park.totalRevenueForOneYear()
    assert.strictEqual(actual, 12420)

  });

  it('should be able to delete a species from a dinosaur collection', function() {
  const actual = park.removeSpecies('diplodocus')
  assert.deepStrictEqual(actual, [dinosaur, dinosaur1] )

  });



});
