const chai = require("chai"); // 1

const { shouldBuyCar, signUpUser } = require("../shouldBuyCar");
const assert = chai.assert;









//////////////////////////////////////////////////////////////

//     ✓ should return false when the car is a hatchback
describe("#shouldBuyCar()", function () {
  //     ✓ should return false when there are no details about the car
  it("should return false when there are no details about the car", function () {
    const car = {};
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return false if it's a hatchback", function () {
    const car = {
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // ✓ should return true when the car is pink
  it("should return true when the car is pink", function () {
    const car = {
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  //     ✓ should return false when the car is a hatchback and pink
  it("should return false when the car is a hatchback and pink", function () {
    const car = {
      color: "pink",
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  //     ✓ should return true when the car has 6 litres/100km and is under or equal to $5,000
  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function () {
    const car = {
      litresPer100km: 6,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  //     ✓ should return true when the car has 11 litres/100km and is under or equal to $5,000
  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function () {
    const car = {
      litresPer100km: 11,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  //     ✓ should return false when the car has 6 litres/100km and is over $5,000
  it("should return false when the car has 6 litres/100km and is over $5,000", function () {
    const car = {
      litresPer100km: 11,
      price: 6000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  //     ✓ should return false when the car has 12 litres/100km and is under or equal to $5,000
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function () {
    const car = {
      litresPer100km: 12,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  //     ✓ should return false when the car has 5 litres/100km and is under or equal to $5,000
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function () {
    const car = {
      litresPer100km: 5,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  //✓ should return false when the car has 12 litres/100km and is under or equal to $5,000
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function () {
    const car = {
      litresPer100km: 12,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  //     ✓ should return false when the car has 12 litres/100km and is under or equal to $5,000
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function () {
    const car = {
      litresPer100km: 12,
      price: 5000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  
});

describe("#signUpUser()", function () {
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
