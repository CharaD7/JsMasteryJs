const numbers = [-10, 0, -2, 15, -36, 25];
const  positiveNumbers = numbers.filter(number => number >= 0);

console.log(`Positive numbers in ${numbers} are ${positiveNumbers}`);

var employeesData = [
  { name: 'Sebastain', overtime: 5 },
  { name: 'Cardi Vee', overtime: 10 },
  { name: 'Goergoe Lopez', overtime: 12 },
];

const employeesToReward = employeesData.filter(employees => employees.overtime >= 7);
console.log(`Employees to reward are ${employeesToReward}`);
