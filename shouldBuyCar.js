//const car = {};
const shouldBuyCar = (car) => {
  if (car === undefined) {
    return undefined;
  } else if (car.type && car.type.toLowerCase() === "hatchback") {
    return false;
  } else if (car.color && car.color.toLowerCase() === "pink") {
    return true;
  } else if (Object.keys(car).length === 0) {
    return false;
  } else if (car.color === "pink" && car.type === "hatchback") {
    return false;
  }
  const goodLitres =
    car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;

  const goodPrice = car.price && car.price <= 5000;

  if (goodLitres && goodPrice) {
    return true;
  }

  return false;
};
const signUpUser = (user) => {
  if (user["age"] < 18) return false;
  else {
    return true;
  }
};

module.exports = { shouldBuyCar, signUpUser };
 