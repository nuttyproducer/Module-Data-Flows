let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("\nThanks for dining / See you next time!");
console.log("==================================");
console.log("QTY     ITEM                TOTAL");

let grandTotal = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const total = (quantity * unitPricePence) / 100;
  grandTotal += total;
  console.log(
    `${quantity.toString().padEnd(8)}${itemName.padEnd(21)}${total.toFixed(2)}`
  );
});

console.log(`\nTotal: ${grandTotal.toFixed(2)}`);
console.log("==================================");
