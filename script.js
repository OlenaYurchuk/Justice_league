// const message = 'Mango ' + 'is' + ' happy';
// console.log(message);

// const age = 39;
// const sentence = 'Olena is ' + age + ' years old';
// console.log(sentence);

// console.log(1 + 2 + '4');


// console.log(String(5));
// console.log(String(true));

// console.log(5 + '5');

// const guestName = 'Mango';
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);

// const productName = 'Repair droid';
// console.log(productName.length);
// console.log('Repair droid'.length);

// const product = 'Repair droid';
// console.log(product[0]);
// console.log(product[5]);
// console.log(product[11]);
// console.log(product);

// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]);
// console.log(product[product.length - 1]);

// const a = 2;
// const b = 5;
// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); //true

// console.log(Number('5')); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0

// console.log(Number(undefined)); // NaN
// console.log(Number('Jacob')); // NaN
// console.log(Number('25px')); // NaN

// console.log('5' * 2); // 10
// console.log('10' - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4


// function multiply(x, y, z) {
//     console.log(`Result ${x * y * z}`);
// }

// multiply(5, 7, 7);


// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     // return orderedQuantity * pricePerItem;
//     console.log(orderedQuantity * pricePerItem);
// }

// calculateTotalPrice(7, 42);

// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
    
//     // return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// }

// makeTransaction(4, 500);

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
    
//     // return `Shipping to ${country} will cost ${totalPrice} credits`;
//     console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
// }

// getShippingMessage('Canada', 137, 42);

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"


// function getElementWidth(content, padding, border) {

//     // return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
//     console.log(Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2);
// }

// getElementWidth('3.5px', '4px', '7px');

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200


// function checkAge(age) {
//     if (age >= 18) {
//         console.log(`You are an adult`);
//     }
// }

// checkAge(20);
// checkAge(17);
// checkAge(3);


// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log('mango' && 5);
// console.log(null && true);
// console.log('false' && 0);


// function isNumberInRange(start, end, number) {
//     console.log(number >= start && number <= end);
// }

// isNumberInRange(17, 27, 20);
// isNumberInRange(1, 18, 20);

// console.log(!0);

// function toggleModalVisibility(isVisible) {
//     console.log(!isVisible);
// }

// function getSubstring(string, length) {
//     console.log(string.slice(0, length));
// }

// getSubstring('Hello world!', 7);
// getSubstring('Hello world!', 3);

// function normalizeInput(input, to) {
//     if (to === 'upper') {
//         console.log(input.toUpperCase());
//     } else if (to === 'lower') {
//         console.log(input.toLowerCase());
//     }
// }

// normalizeInput("This ISN'T SpaM", "lower");
// normalizeInput("This ISN'T SpaM", "upper");

// function checkForName(fullName, firstName) {
//   fullName = fullName.toLowerCase();
//   firstName = firstName.toLowerCase();

//   console.log(fullName.includes(firstName));
// }

// checkForName("Caty Stars", "cAtY");
// checkForName("Caty Stars", "Andromeda");

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     console.log("File extension matches");
//   } else {
//     console.log("File extension does not match");
//   }
// }

// checkFileExtension("index.html", ".html");
// checkFileExtension("index.html", ".css");

// function getFileName(file) {
//     const str = file.indexOf('.');
//     if (str === -1) {
//         console.log(file);
//     } else {
//         console.log(file.slice(0, str));
//     }
// }

// getFileName("styles.css");
// getFileName("styles");
// getFileName("app.js")

// function createFileName(name, ext) {
//     const fullFileName = name.trim() + '.' + ext.trim();
//     console.log(fullFileName);
// }

// createFileName("report ", " csv");




// function calculateTotal(number) {
//     let count = 0;
//     let sum = 0;
//     while (count < number) {
//         count += 1;

//         sum = sum + count;
//         console.log(sum);
//     }

//     console.log(sum);
// }

// calculateTotal(3);


// function calculateTotalNumber(number) {
//   let sum = 0;

//   for (let i = 0; i < number; i++) {
//     sum = sum + i;
//     sum++;
//   }
//   return sum;
// }

// calculateTotalNumber(3);


// function calculateEvenTotal(number) {

//   let sum = 0;

//     for (let i = 0; i <= number; i += 2) {
//         // console.log(i);
//         if (number === 0) {
//             console.log(0);
//         } else {
//             sum = sum + i;
//         }
       
//     }
//     console.log(sum);
// }

// calculateEvenTotal(27);

// const start = 6;
// const end = 17;
// let number;

// for (number = start; start < end; number += 1) {

//     if (number % 5 === 0) {
//     break;
//   }  
// }

// console.log(number);

// function findNumber(start, end, divisor) {
//   for (let i = start; start <= end; i += 1) {
//       if (i % divisor === 0) {
        
//           console.log(i);
//           return i;
//     }
//   }
// }

// findNumber(8, 17, 3);
// findNumber(16, 35, 7);


// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;

//     if (totalPrice <= customerCredits) {
//         console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
//     } else {
//         console.log('Insufficient funds!');
//     }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         console.log(message);
//     } else {
//         console.log(message.slice(0, maxLength) + '...');
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


// function checkForSpam(message) {
//     message = message.toLowerCase();

//     if (message.includes('spam') || message.includes('sale')) {
//         console.log(true)
//     } else {
//         console.log(false);
//     }
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getShippingCost(country) {
//     switch (country) {
//         case 'China':
//             console.log(`Shipping to ${country} will cost 100 credits`);
//             break;
//         case 'Chile':
//             console.log(`Shipping to ${country} will cost 250 credits`);;
//             break;
//         case 'Australia':
//             console.log(`Shipping to ${country} will cost 170 credits`);
//             break;
//         case 'Jamaica':
//             console.log(`Shipping to ${country} will cost 120 credits`);
//             break;
//         default: console.log('"Sorry, there is no delivery to your country');
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// function getExtremeElements(array) {
//     const firstElement = array[0];
//     console.log(firstElement);
//     const lastElement = array.length - 1;
//     console.log(lastElement);
//     const lastElementValue = array[lastElement];
//     console.log(lastElementValue);
//   const newArray = [firstElement, lastElementValue];

//   console.log(newArray);
// }

// getExtremeElements(["apple", "peach", "pear", "banana"]);

// const array= [false];
// const result = array ? "A" : "B";

// console.log(result);

// function getLength(array) {
//   array = array.join('');

//   console.log(array.length);
// }

// getLength(["top", "picks", "for", "you"]);

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
//     const totalPrice = words.length * pricePerWord;
//     console.log(totalPrice);
// }

// calculateEngravingPrice("JavaScript is in my blood", 20);

// function getSlice(array, value) {
//     const getValue = array.indexOf(value);
    
//    // console.log(getValue);

//     const newArray = array.slice(0, getValue + 1);
//     console.log(newArray);

  
// }

// getSlice(["Mango", "Poly", "Ajax"], "Mango");
// getSlice(["Mango", "Poly", "Ajax"], "Jacob");
// getSlice(["Mango", "Poly", "Ajax"], "Ajax");


// function createArrayOfNumbers(min, max) {
//   const array = [];

//   for (let i = min; i <= max; i += 1) {
//     array.push(i)
//   }

//   console.log(array);
// }

// createArrayOfNumbers(14, 17);

// function calculateTotalPrice(order) {
//   let result = 0;

//     for (let i = 0; i < order.length; i += 1) {

//         result = result + order[i];
//         console.log(result);
//   }

 
// }

// calculateTotalPrice([412, 371, 94, 63, 176]);

// function getEvenNumbers(start, end) {
//   let result = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   console.log(result);
// }

// getEvenNumbers(6, 12);

// function checkStorage(storage, item) {
//     item = item.toLowerCase();

//   if (storage.includes(item)) {
//     console.log(`${item} is available to order!`);
//   } else {
//     console.log(`Sorry! We are out of stock!`);
//   }
// }

// checkStorage(["apple", "plum", "pear"], "pLuM");
// checkStorage(["apple", "plum", "pear"], "carrot");


// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   console.log(newArray);
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);


// function sum(a, b) {
//   console.log(arguments);
//   console.log(a + b);
// }

// sum(2, 5);


// function createReversedArray() {
//   const array = Array.from(arguments);
//     console.log(array);
//   console.log(array.toReversed());
// }

// createReversedArray(12, 85, 37, 4);


// function calculateTax(amount, taxRate = 0.2) {
//     console.log(amount * taxRate);
// }

// calculateTax(100, 0.1);
// calculateTax(100); 


// function slugify(title) {
//     const words = title.split(' ');

//     const slug = words.join('-');

//     console.log(slug.toLowerCase()); 
// }

// slugify("Arrays For Begginers");

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);

//     if (newArray.length <= maxLength) {
//         console.log(newArray);
//     } else {
//         console.log(newArray.slice(0, maxLength));
//     }
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 2);

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// function filterArray(numbers, value) {
//     const array = [];
//     for (const number of numbers) {
//         if (number > value) {
//             array.push(number);
//         }
//     }

//     console.log(array);
// }

// filterArray([34, 57, 68], 99);

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: 'Jamaica',
//     city: 'Kingston',
// }


// console.log(apartment);

// for (const key in apartment) {
//     console.log(key);
//     console.log(apartment[key]);
// }

// function countProps(object) {

//   const array = Object.keys(object);
//     console.log(array);
//     console.log(array.length);
// }

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//     const values = Object.values(salaries);
//     console.log(values);

//   for (const value of values) {
//     totalSalary = totalSalary + value;
//   } 

//   console.log(totalSalary);
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({});

// function isEnoughCapacity(products, containerSize) {
//     let amount = 0;
//     const values = Object.values(products);

//     for (const value of values) {
//         amount += value;
//     }

//     if (amount <= containerSize) {
//         return true;
//     } else {
//         return false;
//     }
// }


// isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8);

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
// ); // false


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//       if (product.name === productName) {
//         console.log(product.price);
//       } 
//   }
// }

// getProductPrice("Engine");
// getProductPrice("Droid");

// function calcAverageCalories(days) {
   
//     let amountOfTotalCalories = 0;

//     for (const day of days) {
      
//         amountOfTotalCalories += day.calories;
//     }

//       const averageCalories = amountOfTotalCalories / days.length;

//     if (days.length === 0) {
//         return 0;
//     } else {
//         return averageCalories;
//     }   
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
    
//     const propValues = [];
//     for (const product of products) {
//         if (product[propName] !== undefined) {
//             propValues.push(product[propName]);  
//        }
//     }
//     console.log(propValues);
// }

// getAllPropValues("name");
// getAllPropValues("price");
// getAllPropValues("quantity");
// getAllPropValues("category");


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//     let result = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             result = product.price * product.quantity; 
//             console.log(result);
//         } 
//     }
//      console.log('Sorry'); 
// }

// calculateTotalPrice("Poly");
// //  calculateTotalPrice("Radar");

// const profile = {
//     username: 'Jacob',
//     playTime: 300,
//     changeUsername(newName) {
//         this.username = newName;
//     },
//     updatePlayTime(hours) {
//         this.playTime = this.playTime + hours;
//     },
//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours!`;
//     }
// }

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// function add(...args) {
//     const argsArray = args;
//     console.log(argsArray);
//     let result = 0;
//     for (const arg of argsArray) {
//         result += arg;
//     }
//     console.log(typeof(result));
// }

// add(32, 6, 13, 19, 8);

// function addOverNum(num, ...rest) {
//   let sum = 0;
//     const numbers = rest;

//   for (const number of numbers) {
//       if (number > num) {
//       sum += number;
//     }
//   }
//     console.log(sum);
// }

// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(50, 15, 27);

// function getExtremeScores(scores) {
//     const numbers = {
//         best: Math.max(...scores),
//         worst: Math.min(...scores),
//     }
//     console.log(numbers);
// }

// getExtremeScores([89, 64, 42, 17, 93, 51, 26]);

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const res = makePizza();
// console.log(res);
// const pointer = makePizza;
// console.log(pointer);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   console.log(callback(pizzaName));
// }

// makeMessage("Royal Grand", makePizza);
// makeMessage("Ultracheese", deliverPizza);

// function filterArray(numbers, value) {
//     const newArray = [];

//     numbers.forEach(function (number) {
//         if (number > value) {
//             newArray.push(number);
//         }
//     });
//     console.log(newArray);
// }

// filterArray([1, 2, 3, 4, 5], 3);


// function changeEven(numbers, value) {
//   const arrayOfNumbers = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number = number + value;
//     }
//        arrayOfNumbers.push(number);
//   })
//   console.log(arrayOfNumbers);
// }

// changeEven([1, 2, 3, 4, 5], 10);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);


// const getUserNames = (users) => users.map(user => user.name);

// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive === true);
// };

// console.log(isEveryUserActive(users));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + (player.playtime / player.gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const booksS = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = booksS.toSorted((a, b) => a.title.localeCompare(b.title));

// const sortedByReversedAuthorName = booksS.toSorted((firstBook, secondBook) => secondBook.title.localeCompare(firstBook.title));

// const sortedByAscendingRating = booksS.toSorted((a, b) => a - b);

// const sortedByDescentingRating = booksS.toSorted((a, b) => b - a);

// console.log(sortedByAuthorName);

// const sortByDescendingFriendCount = (users) => {
//   return users.toSorted((a, b) => b.friends.length - a.friends.length);
// }


// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]

// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).reduce((acc, item) => acc + item.balance, 0);
// }

// const all = [
//     {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(all, "male")); // 12053

// console.log(getTotalBalanceByGender(all, "female")); // 8863

// const allBooks = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = allBooks.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author);
// console.log(names);

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = 'John';

// const context = {
//   person: 'Alice',
// };

// greet.call(context, 'Bob');



// // const customer = {
// //   firstName: 'Jacob',
// //   lastName: 'Mercer',
// //   getFullName() {
// //     return `${this.firstName} ${this.lastName}`;
// //   },
// // };

// // function makeMes(callback) {
// //   const username = callback();
// //   console.log(`Processing an application from ${username}`);
// // }

// // makeMes(customer.getFullName.bind(customer));

// // const library = {
// // 	books: 1923,
// // 	logBookCount() {
// // 		console.log(this.books);
// // 	}
// // };

// // const showBooks = library.logBookCount.bind({ books: 724 });

// // showBooks();

// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount.bind(library));

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// // const Storage = {
// //   items: ["Nanitoids", "Prolonger", "Antigravitator"],
// //   getItems() {
// //     return this.items;
// //   },
// //   addItem(newItem) {
// //     return this.items.push(newItem);
// //   },
// //   removeItem(itemToRemove) {
// //     const newListOfItems = this.items.filter(item => item !== itemToRemove); 
// //     return newListOfItems;
// //   },
// // };

// // // const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(Storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// // Storage.addItem("Droid");
// // console.log(Storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // Storage.removeItem("Prolonger");
// // console.log(Storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// const apartment1 = {
// 	rooms: 4,
// 	floor: 2,
// 	taxFree: false
// };

// const condo = Object.create(apartment1);
// condo.rooms = 3;

// console.log(condo.rooms);


// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const elena = new User('Elena', 'lena.urchuck777@gmail.com');
// console.log(elena);

// const poly = new User('Poly', 'poly@gmail.com');
// console.log(poly);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items = this.items.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class User1 {
//   name;
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const marc = new User1({
//   name: 'Marc',
//   email: 'marc@gmail.com',
// });

// console.log(marc.getEmail());
// marc.changeEmail('sorrymarc@gmail.com');
// console.log(marc.getEmail());

// class Car {
//   #brand;
//   model;
//   price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     this.#brand = brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// class Carr {
//   static maxPrice = 50000;
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//      if (newPrice <= Carr.maxPrice) {
//        this.#price = newPrice
//      }
//   }
// }

// const audi = new Carr({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car2 {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (price > Car2.#maxPrice) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi2 = new Car2({ price: 36000 });
// const bmw2 = new Car2({ price: 64000 });

// console.log(Car2.checkPrice(audi2.price)); // "Success! Price is within acceptable limits"
// console.log(Car2.checkPrice(bmw2.price)); // "Error! Price exceeds the maximum"

// class User2 {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User2 {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser"
//   }
// }

// console.log(Admin.role.BASIC);
// console.log(Admin.role.SUPERUSER);

// const arr = [1, 2, 3];
// const email = 'olena@com';
// const ress = arr.includes(email);

// console.log(ress);


class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, access, blacklistedEmails = [] }) {
    super(email);
    this.access = access;
    this.blacklistedEmails = blacklistedEmails;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

console.log(100 % 150);

Image.setAttribute("href", '<https://picsum.photos/id/15/320/240>')