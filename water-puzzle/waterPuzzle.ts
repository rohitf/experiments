
/* Rohit Falor
* waterPuzzle.ts
* A class which models water jars and uses Euclid's GCD algorithm
* to solve the classic water puzzle
* Last modified: 4/18/16
*/

"use strict";

// CLASS DEFINITIONS
class Container {
  capacity: number;
  amount: number;

  constructor(capacity, amount = 0) {
    this.capacity = capacity;
    this.amount = amount;
  }

  isFull = () => this.amount === this.capacity;
  isEmpty = () => this.amount === 0;

  empty() {
    this.amount = 0;
  }

  fill() {
    this.amount = this.capacity;
  }

  pour(c: Container) {
    let delta = Math.min(c.capacity - c.amount, this.amount);
    this.amount -= delta;
    c.amount += delta;
    return delta;
  }

  static goalReached(goal: number, x: Container, y: Container) {
    return x.amount === goal || y.amount === goal;
  }
}

let gcd = function(a, b) {
  return b ? gcd(b, a % b) : a;
};


// Solve a water puzzle given sizes (in Liters)
const containers = [3,4]
const goal = 2

let S = new Container(Math.min(...containers));
let L = new Container(Math.max(...containers));
let steps = 0;

console.log(`${S.capacity}L container\n${L.capacity}L container`);
console.log(`Goal: ${goal} liters`);

S.fill();

if (
  goal > Math.max(S.capacity, L.capacity) ||
  goal % gcd(S.capacity, L.capacity) != 0
) {
  console.log("Mission impossible");
} else {
  while (!Container.goalReached(goal, S, L)) {
    console.log(`\n${S.capacity}L container has ${S.amount} liters`);
    console.log(`${L.capacity}L container has ${L.amount} liters\n`);

    let amt = S.pour(L);
    console.log(
      `Pour ${amt} liters from ${S.capacity}L container to ${
        L.capacity
      }L container.`
    );
    steps++;

    if (L.isFull()) {
      console.log(
        `${L.capacity}L container is full. Empty ${L.capacity}L container.`
      );
      L.empty();
      steps++;
    }
    if (S.isEmpty()) {
      console.log(
        `Refill ${S.capacity}L container (fill ${S.capacity -
          S.amount} liters).`
      );
      S.fill();
      steps++;
    }
  }
  console.log(`\n${S.capacity}L container has ${S.amount} liters`);
  console.log(`${L.capacity}L container has ${L.amount} liters\n`);
  console.log(`Goal of ${goal} liters achieved in ${steps} steps.`);
}
