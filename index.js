//-------------------toLowerCase() and toUpperCase()--------------------
// let subject = 'Chemistry';
// let book = 'chemistry';
// if (subject.toLowerCase() === book) {
//     console.log('I am reading book');
// }
// else {
//     console.log('I am not reading book');
// }


//-----------------------trim(), trimEnd(), trimStart()--------------------
// let drink = 'water ';
// let liquid = ' water';
// if (drink.trimEnd() === liquid.trimStart()) {
//     console.log('solid water');
// }
// else {
//     console.log('wrong water');
// }


//---------------slice(2, 5)--------------------
// const country = 'Bangladesh';
// const part = country.slice(3, 7);
// console.log(part);


// --------------------split()------------------------
// const sentence = 'I am a good person';
// console.log(sentence.split(''));
// const friendsStr = 'Rakib, Tareq, Saimon, Tanvir, Al-Hasan, Al-Hossen, Hasnat';
// const friends = friendsStr.split(',');
// console.log(friends);


//-------------------------join()-----------------------------
// const familyMember = ['Rakib', 'Tareq', 'Saimon', 'Tanvir', 'Al-Hasan', 'Al-Hossen', 'Hasnat'];
// console.log(familyMember.join());
// console.log(familyMember.join('|'));
// console.log(familyMember.join('-'));


//-----------------------concat and includes---------------------------
// const first = 'Mohammad';
// const last = 'Rakib';
// const fullName = first.concat(' ').concat(last);
// console.log(fullName.includes('c'));


//-----------------------reverse string----------------------
// let sentence = 'I am a web developer';
// let reverse = '';
// for (let letter of sentence) {
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

// let country = 'Bangladesh is my country';
// let rev = '';
// for (letter of country) {
//     // console.log(letter);
//     rev = letter + rev;
// }
// console.log(rev);

// let home = 'chittagong';
// let rev = home.split('').reverse('').join('');
// console.log(rev);


//---------------object declare------------------
// const student = {
//     name: 'Mohammad Rakib',
//     class: 12,
//     subject: 'chemistry',
// }
// console.log(student.name);

// const nam = student.name;
// console.log(nam);


// const bottle = {
//     price: 230,
//     color: 'yello',
//     isClean: false
// }
// console.log(bottle['color']);
// const dam = bottle['price'];
// console.log(dam);


// const laptop = {
//     price: 100000,
//     color: 'gray',
//     brand: 'lenovo',
//     ram: '8gb',
//     ssd: '1TB',
//     'order laptop': ['hp', 'asus', 'dell', 'apple', 'lenovo']
// }
// laptop.price = 200000;
// laptop['order laptop'] = ['apple', 'microsoft', 'asusbook']
// console.log(laptop)
// console.log(laptop['order laptop']);
// const laptops = 'brand';
// laptop[laptops] = 'apple';
// console.log(laptop)


// const mobile = {
//     brand: 'apple',
//     price: 100000,
//     color: 'black',
//     processor: 'octa-core',
//     storage: 128,
//     ram: 8,
// }
// const key = Object.keys(mobile);
// console.log(key);
// const value = Object.values(mobile);
// console.log(value);
// console.log(mobile);


// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 Feb'],
//     unique: {
//         color: 'white',
//         result: {
//             gpa: 5,
//             merit: 'top level'
//         }
//     }
// }
// console.log(college.events[2]);
// console.log(college.unique.result.merit)
// college.unique.result.merit = 'top higher level';
// college.events[2] = '16 December';
// college.events[1] = '16 dec';
// delete college.name;
// console.log(college)


//-------------------------(for in) only usege object---------------------
// const mobile = {
//     brand: 'Redmi',
//     price: 20000,
//     ram: '4gb',
//     storage: 128,
//     color: 'black',
//     camera: '50mp',
//     displaySize: '12 inc'
// }

// for (const key in mobile) {
//     // console.log(mobile[key]);
// }

// const keys = Object.keys(mobile);
// console.log(keys);

// for (const key of keys) {
//     console.log(key, ':', mobile[key]);
// }



//--------------------------------------------------- JS Task ------------------------------------------
// let myObjects = {
//     name: 'Tanvirul Islam',
//     age: 25,
//     city: 'Dhaka',
//     isStudent: true
// }

// for (let key in myObjects) {
//     console.log('key:', key, '| type:', typeof myObjects[key]);
// }


// const color = {
//     red: '#ff0000',
//     green: '#00ff00',
//     blue: '#000ff',
//     'golden rod': '#daa520'
// }
// const golden = color['golden rod'];
// console.log(golden);


// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2020
// }
// car['passengerCapacity'] = 5;
// console.log(car)


// const student = {
//     name: 'Mohammad Rakib',
//     id: 5421,
//     physics: {
//         subject: 'HSC physics',
//         author: 'Tarek Hasan',
//         marks: 30
//     }
// }
// console.log(student.physics.marks);


// let student = {
//     name: 'Alam',
//     age: 23,
//     city: 'chottogram',
//     isStudent: true
// }
// let checkProperty = Object.keys(student).length;
// console.log(checkProperty);