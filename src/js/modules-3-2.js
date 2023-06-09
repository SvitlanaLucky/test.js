// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {

//             if (item.name === product.name) {
//                 console.log('OK ', product.name);
//                 item.quantity += 1;
//                 return;
//             };
//         };

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const { name } = this.items[i];

//             if (productName === name) {
//                 console.log('OK: ', productName);
//                 console.log('index: ', i);

//                 items.splice(i, 1);
//             };
//         };
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         console.log(this.items);

//         let total = 0;

//         for (const item of this.items) {
//             total += item.price * item.quantity;
//         };

//         return total;
//     },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'banana', price: 110 });
// cart.add({ name: 'banana', price: 110 });
// cart.add({ name: 'banana', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('apple');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());


// ______________________________________________________________________________________________


// const playlist = {
//     name: 'my',
//     rating: 7,
// };

// const { name, rating } = playlist;

// console.log(name, rating);
// console.log(playlist);

// _________________________________________________________________________________________________

// const profile = {
//     name: 'Svitlana',
//     tag: 'qwer',
//     location: 'Kyiv',
// };

// const { name, tag, location } = profile;

// console.log(name, tag, location);


// const rgb = [255, 67, 100];
// const [red, , blue] = rgb;

// console.log(red, blue);

// ________________________________________________________________________________

// const showProfileInfo = function (userProfile) {
//     const { name, tag, location, ...restProps } = userProfile;

//     // console.log(name, tag, location, avatar, followers, views, likes);
//     console.log(restProps);
// };

// const profile = {
//     name: 'Ukraine',
//     tag: 'qwerty',
//     location: 'Kyiv',
//     avatar: 'https://Q5',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const makeProfileMarkup = function (userProfile) {
//     const { avatar = 'https://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-jpew31mmovm.jpg',
//         name,
//         tag,
//         location = 'Planet',
//         stats: { followers, views, likes },
//     } = userProfile;
    
//     return `<div>
//         <img src="${avatar}" alt="user avatar">
//         <p>${name}<span>@${tag}</span></p>
//         <p>Location: ${location}</p>
//         <ul>
//             <li>Followers: ${followers}</li>
//             <li>Views: ${views}</li>
//             <li>Likes: ${likes}</li>
//         </ul>
//     </div>`
// };

// const markup = makeProfileMarkup(profile);

// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup);

// ________________________________________________________________________________


// function cutUserData({ birthDate, phone, ...rest }) {
//     const newUser = { ...rest };

//     console.log(newUser);
// };

// cutUserData({
//     name: 'Bobby',
//     age: 21,
//     phone: '238-38-90',
//     eyes: 'green',
// });

// _______________________________________________________________________


// const products = [
//     { name: 'Sv', price: 1300, quantity: 4 },
//     { name: 'Ol', price: 300, quantity: 7 },
//     { name: 'Ua', price: 5, quantity: 8 },
// ];

// function getAllPropValues(propName) {
//     const arrayAllPropValues = [];
    
//     for (const product of products) {
//         if (product[propName])
//             arrayAllPropValues.push(product[propName]);
//     };

//     return arrayAllPropValues;
// };

// console.log(getAllPropValues("price"));

// _________________________________________________________________________

// console.log([1, 2] === [1, 2]);

// let a = [10];

// const b = a;
// a[0] = 500;
// console.log(a === b);

// let a = 10;
// const b = a;
// a = 20;
// console.log(a === b);

// _____________________________________________________________________________


// const findLongestWord = string => {
//     const arrayWords = string.split(' ');

//     let longestWord = arrayWords[0];

//     console.log(arrayWords);

//     for (const word of arrayWords) {
//         console.log(word);

//         if (word.length > longestWord.length) {
//             longestWord = word;
//         };
//     };

//     return longestWord;
// };

// console.log(findLongestWord('Help me'));

// _______________________________________________________________________________

// const colors = ['blue', 'yellow', 'olive', 'lime'];


// const findTheColor = function (color) {
//     if (colors.includes(color)) {
//         document.body.style.background = color;
//         return
//     };

//     document.body.style.background = 'red';

//     console.log('it is not find');
// };

// findTheColor('yellow');

// ______________________________________________________________________

// const courses = [];

// const add = function (...name) {
//     courses.push(...name);
// };

// const removeCourse = function (name) {
//     const index = courses.indexOf(name);
//     courses.splice();
    
//     console.log(index)
// };

//     add('HTML', 'JS');
//     removeCourse('JS');

// console.log(courses);

// ______________________________________________________________________________

const arr = [1, 2, 3];
// const [one, , three] = arr;

// console.log(one, three);
// ________________________________________________________

// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//     },
// };
// const name = 'value';

// const { age, name: userName } = user;

// console.log(age);
// console.log(name);
// console.log(userName);
// console.log(user);


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//     },
// };

// const { name, skills: { js, css } } = user;

// console.log(js, css);
// ______________________________________________________________________________

// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         cars: {
//             audi: 'A6',
//             bmw: 'x5',
//         },
//     },
//     languages: [{html: true}, {css: false}],
// };

// for (const language of user.languages) {
//     console.log(language);
// };
// ___________________________________________________________________

// const users = [{
//     name: 'User1', language: 'html',
// }, {
//     name: 'User2', language: 'css',
// }, {
//     name: 'User3', language: 'js',
//     }]

// for (const { name } of users) {
//     console.log(name);
// };
// _____________________________________________________________

// const propName = 'name';

// const user = {
//     age: 25,
//     [propName]: 'Anna',
// };

// console.log(user.name);


// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',
// };

// console.log(credentials.email);
// console.log(credentials.password);
// _______________________________________________________________________________

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// };

// console.log(keys);
// console.log(values);
// _______________________________________________________________________________

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
    
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// };

// console.log(calcBMI({ weight: '88,3', height: '1.74' }));
// _____________________________________________________________________________

// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props,
//     };
// };

// console.log(transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Marcer',
//     email: 'j.m@mail.ccom',
//     friendCount: 40,
// }),);

// console.log(transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.c@mail.ccom',
//     friendCount: 20,
// }),);
// _______________________________________________________________________________

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// };

// console.log(keys);
// console.log(values);
// __________________________________________________________________

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(values);
// __________________________________________________________________________


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     console.log(hexColors.push(color.hex));
//     console.log(rgbColors.push(color.rgb));
// };

// console.log(hexColors);
// console.log(rgbColors);
// ____________________________________________________________

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    for (const product of products) {
        if (product.name === productName) {
            return product.quantity;
        };
    };
    return null;
};

console.log(getProductPrice("Grip"));

