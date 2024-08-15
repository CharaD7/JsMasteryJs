const inventory = [
  { price: 5, name: 'eggs' },
  { price: 8, name: 'ham' },
  { price: 2, name: 'mayo' },
  { price: 12, name: 'bread' },
];

const prices = inventory.map(item => item.price);
console.log(`All prices: ${prices}`);
