/* Rohit Falor
* waterPuzzle.ts
* A class which models water jars and uses Euclid's GCD algorithm
* to solve the classic water puzzle
* Last modified: 4/18/16
*/
"use strict";
// CLASS DEFINITIONS
var Container = (function () {
    function Container(capacity, amount) {
        if (amount === void 0) { amount = 0; }
        var _this = this;
        this.isFull = function () { return _this.amount === _this.capacity; };
        this.isEmpty = function () { return _this.amount === 0; };
        this.capacity = capacity;
        this.amount = amount;
    }
    Container.prototype.empty = function () {
        this.amount = 0;
    };
    Container.prototype.fill = function () {
        this.amount = this.capacity;
    };
    Container.prototype.pour = function (c) {
        var delta = Math.min(c.capacity - c.amount, this.amount);
        this.amount -= delta;
        c.amount += delta;
        return delta;
    };
    Container.goalReached = function (goal, x, y) {
        return x.amount === goal || y.amount === goal;
    };
    return Container;
}());
var gcd = function (a, b) {
    return b ? gcd(b, a % b) : a;
};
// Solve a water puzzle given sizes (in Liters)
var containers = [3, 4];
var goal = 2;
var S = new Container(Math.min.apply(Math, containers));
var L = new Container(Math.max.apply(Math, containers));
var steps = 0;
console.log(S.capacity + "L container\n" + L.capacity + "L container");
console.log("Goal: " + goal + " liters");
S.fill();
if (goal > Math.max(S.capacity, L.capacity) ||
    goal % gcd(S.capacity, L.capacity) != 0) {
    console.log("Mission impossible");
}
else {
    while (!Container.goalReached(goal, S, L)) {
        console.log("\n" + S.capacity + "L container has " + S.amount + " liters");
        console.log(L.capacity + "L container has " + L.amount + " liters\n");
        var amt = S.pour(L);
        console.log("Pour " + amt + " liters from " + S.capacity + "L container to " + L.capacity + "L container.");
        steps++;
        if (L.isFull()) {
            console.log(L.capacity + "L container is full. Empty " + L.capacity + "L container.");
            L.empty();
            steps++;
        }
        if (S.isEmpty()) {
            console.log("Refill " + S.capacity + "L container (fill " + (S.capacity -
                S.amount) + " liters).");
            S.fill();
            steps++;
        }
    }
    console.log("\n" + S.capacity + "L container has " + S.amount + " liters");
    console.log(L.capacity + "L container has " + L.amount + " liters\n");
    console.log("Goal of " + goal + " liters achieved in " + steps + " steps.");
}
