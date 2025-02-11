// const numbers = [3, 5, 2, 6, 2];
// const doubled = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);


// const numbers = [3, 5, 2, 6, 2];
// function doubledIt(num) {
//     return num * 2;
// }
// const result = numbers.map(doubledIt);
// console.log(result)


// const numbers = [3, 5, 2, 6, 2];
// const double = n => n * 2;
// const result = numbers.map(double);
// console.log(result);


// const numbers = [3, 5, 2, 6, 2];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);


// const numbers = [3, 5, 2, 6, 2];
// const add = numbers.map(num => num + 3);
// console.log(add);


// const numbers = [3, 5, 2, 6, 2];
// const divide = numbers.map(num => num / 5);
// console.log(divide);


// const names = ['tareq', 'rakib', 'tanvir', 'alhasan', 'saimon'];
// const length = names.map(name => name.length);
// console.log(length);


// const names = ['tareq', 'rakib', 'tanvir', 'alhasan', 'saimon'];
// const firstLetter = names.map(friend => friend[0]);
// console.log(firstLetter);


// const players = [3, 5, 2, 6, 2];
// const selected = players.filter(p => p > 4);
// console.log(selected);


// const players = [3, 5, 2, 6, 2];
// const selected = players.filter(p => p < 4);
// console.log(selected);


// const players = [3, 5, 2, 6, 2];
// const selected = players.filter(p => p % 2 === 0);
// console.log(selected);


// const names = ['tareq', 'tim', 'kim', 'rakib', 'tanvir', 'alhasan', 'saimon'];
// const oddFriend = names.filter(friend => friend.length > 4);
// console.log(oddFriend);


// const players = [3, 5, 2, 6, 2];
// const total = players.reduce((p, c) => p + c, 0);
// console.log(total);


// const products = [
//     { id: 1, name: 'lenovo', price: 50000 },
//     { id: 2, name: 'dell', price: 40000 },
//     { id: 3, name: 'hp', price: 30000 },
//     { id: 4, name: 'mac', price: 150000 },
// ];
// const total = products.reduce((acum, current) => acum + current.price,0);
// console.log(total);
// const expensive = products.filter(p => p.price > 50000);
// console.log(expensive)
// const expensive = products.filter(p => p.price < 50000);
// console.log(expensive)
// const expensive = products.find(p => p.price < 50000);
// console.log(expensive)
// const names = products.map(product => product.name);
// console.log(names)
// const price = products.map(product => product.price);
// console.log(price)
// products.forEach(p => console.log(p.id));
// products.forEach(p => console.log(p.price));


// const numbers = [35, 50, 79, 78, 90, 101, 30];
// const divide = numbers.filter(p => p % 10 === 0);
// console.log(divide);

// const numbers = [35, 50, 79, 78, 90, 101, 30];
// const divide = numbers.find(p => p % 10 === 0);
// console.log(divide);


// const instructor = [
//     { name: 'Nadi', age: 28, position: 'Senior' },
//     { name: 'Akil', age: 26, position: 'Jonior' },
//     { name: 'Shobuj', age: 30, position: 'Senior' },
// ];

// const nameFillter = instructor.filter(p => p.position === 'Senior');
// console.log(nameFillter);


// const total = products.reduce((acum, current) => acum + current.price,0);
// console.log(total);

// const people = [
//     { name: 'Meena', age: 20 },
//     { name: 'Rina', age: 15 },
//     { name: 'Suchorita', age: 22 },
// ]

// const ageTotal = people.reduce((acum, current) => acum + current.age, 0);
// console.log(ageTotal);