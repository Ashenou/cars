const chai = require("chai"); // 1
const signUpUser = require("./carTest");
const assert = chai.assert;
// ✓ should return true when the car is pink
//     ✓ should return false when there are no details about the car
//     ✓ should return false when the car is a hatchback
//     ✓ should return false when the car is a hatchback and pink
//     ✓ should return true when the car has 6 litres/100km and is under or equal to $5,000
//     ✓ should return true when the car has 11 litres/100km and is under or equal to $5,000
//     ✓ should return false when the car has 6 litres/100km and is over $5,000
//     ✓ should return false when the car has 11 litres/100km and is over $5,000
//     ✓ should return false when the car has 5 litres/100km and is under or equal to $5,000
//     ✓ should return false when the car has 12 litres/100km and is under or equal to $5,000
//     ✓ should return undefined when there is no car
const shouldBuyCar = require("../shouldBuyCar.js"); // 2
describe("#shouldBuyCar()", function () {
  it("should return false if it's a hatchback", function () {
    const car = {
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // Happy Path
  it("should return true if the user is old enough", function () {
    const user = {
      age: 18, // Edge Case
    };
    const canSignUp = signUpUser(user);
    assert.isTrue(canSignUp);
  });

  // Sad Path
  it("should return false if the user is not old enough", function () {
    const user = {
      age: 17, // Edge Case
    };
    const canSignUp = signUpUser(user);
    assert.isFalse(canSignUp);
  });
});
