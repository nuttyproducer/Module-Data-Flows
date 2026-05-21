function sales(carsSold) {
  const totals = {};

  for (const car of carsSold) {
    if (totals[car.make] !== undefined) {
      // brand already exists
      totals[car.make] = totals[car.make] + car.price;
    } else {
      // brand seen for first time
      totals[car.make] = car.price;
    }
  }

  return totals;
}

module.exports = sales;
