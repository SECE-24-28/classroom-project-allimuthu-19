// console.log("Hello, World!");

// //a= 25;
//b="Hello";
//c=50;
//Dont use var unless absolutely necessary as it can be used even before initialization and it can aslo be re-declared.
// var a= 10;
// var a=30;
// let b = "h1";
// const c = 30.4;
// console.log(a,b,c);
// c=50; // This will give error as const variable cannot be re-assigned.

//Data Types in JS
//Primitive Data Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
//Non-Primitive Data Types: Object, Array, Function

//Arrays - is a datatype that stores multiple values of the same datatype.
// var arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]); //Accessing first element of array
// arr[0] = 10; //Modifying first element of array
// console.log(arr);


// arr.push(6); //Adding element at the end of array
// console.log(arr);
// arr.pop(); //Removing element from the end of array
// console.log(arr.length); //Length of array


// arr.unshift(0); //Adding element at the beginning of array
// console.log(arr);
// arr.shift(); //Removing element from the beginning of array
// console.log(arr);

// arr.slice(1,3); //Slicing array from index 1 to 3 (3 not included)
// console.log(arr);
// arr.splice(1,2,50); //Removing 2 elements from index 1 and adding 50 at index 1
// console.log(arr);

// const newArr = arr.map(function(item){
//     return item * 2;
// });
// console.log(newArr); //New array with elements multiplied by 2

// const newArr1 = arr.filter(Number => Number > 2);
// console.log(newArr1); //New array with elements greater than 2 

// const courses = ["mongoDB", "expressJS", "reactJS", "nodeJS"];
// console.log(courses);
// const new_courses = courses.filter(course => course !== "reactJS");
// console.log(new_courses); //New array without reactJS 

// const arr=[1,2,3,4,5];
// const sum = arr.reduce((Store,num) => Store + num,0);
// console.log(`addition of ${arr} is ${sum}`); //Sum of all elements in array
// const diff = arr.reduce((Store,num) => Store - num);
// console.log(`subtraction of ${arr} is ${diff}`); //Subtraction of all elements in array
// const minimum = arr.reduce((Store,num) => Math.min(Store,num));
// console.log(`minimum of ${arr} is ${minimum}`); //Minimum element in array
// const maximum = arr.reduce((Store,num) => Math.max(Store,num));
// console.log(`maximum of ${arr} is ${maximum}`); //Maximum element in array  



//objects - is a datatype that stores multiple values of different datatypes in key-value pairs.
// const person = {
//     firstname: "John",
//     lastname: "Doe",
// }
// console.log(person.firstname); //Accessing value of firstname key
// console.log(person['lastname']); //Accessing value of lastname key

// // user.age = 30; //adding new key-value pair
// console.log("After adding age:", user);

// user['lastname'] = "Smith"; //modifying existing value
// console.log("After modifying lastname:", user);

// delete user.age; //deleting key-value pair
// console.log("after deleting age:", user);

// //KEYS:
// console.log("Keys in user object:", Object.keys(user));//returns an array of keys in the object
// //VALUES:
// console.log("Values in user object:", Object.values(user));//returns an array of values in the object
// //ENTRIES:
// console.log("Entries in user object:", Object.entries(user));//returns an array of key-value pairs in the object

//---------------------SPREAD OPERATOR--------------------

//Spread Operator in JavaScript:
// const arr1 = [5,6,7];
// const arr2 = [1,2,3,4];
// const arr3 = [8,9,10];
// const SpreadAr1 = [...arr1,...arr2,...arr3];//combining arr1, arr2 and arr3
// console.log("Array after using Spread Operator:", SpreadAr1);

// const SpreadAr = [...arr2,...arr1,...arr3,11,12];//combining arr1, arr2 and arr3 and adding 11 and 12 at the end
// console.log("Array after using Spread Operator:", SpreadAr);
//---------------------FUNCTIONS--------------------
// Functions in JavaScript:
// function(a,b){ // hoisted function: declaration is done first and then it can be used
//     const c = a + b; 
//     return c;
// }
// console.log(add(5,10));


// const add = function(a,b){ // non-hoisted function: variable declaration is done first and then it can be used
//     const c = a + b; 
//     return c;
// }

// addition of array using functions.
// const arr = [12,53,23,76,56];
// function arrAdd(arr){
//     const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
//     return sum;
// }
// console.log(Sum of array elements : ${arrAdd(arr)});

// const fact = function factorial(num){
//     //return n<=1 ? 1 : num * fact(num-1);
//     if(num<=1){
//             return 1;
//     }else{
//         return num * factorial(num-1);
//     }
    
// }
// console.log("Factorial of 5 is:", fact(5));

//---------------------METHODS INSIDE OBJECTS--------------------

// const user = {
//     add: function(a,b){ //method inside object
//         return a + b;
//     }
//     ,subtract : function(a,b){
//         return a - b;   
//     }
// }

// ----------------------ARROW FUNCTIONS--------------------
// const sum = (a,b) => {return a + b;}//arrow function
// const subtract = (a,b) => {return a - b;}//arrow function with implicit return

// console.log("Sum using arrow function:", sum(10,5));
// console.log("Subtract using arrow function:", subtract(10,5));

// -----------------------DEFAULT PARAMETERS IN FUNCTIONS--------------------
// function greet(Name = "Guest"){
    // console.log(Hello, ${Name}, Welcome to JavaScript!);


// greet() //Will only work when theres no argument passed through the function whilie calling.
// greet("John") //Will work when argument is passed through the function while calling.

//-------------looping--------------------------------
//Types of loops in JavaScript:
//for loop
// for(let i=1;i<=10;i++)
// {
//     console.log(5 x ${i} = ${5*i});
// }

// //while loop
// let i = 1;
// while(i<=10){
//     console.log(While Loop - 5 x ${i} = ${5*i});
//     i++;
// }

// do{
//     console.log(Do-While Loop - 5 x ${i} = ${5*i});
//     i++;
// }while(i<=10);

const user = {
    fname : "John",
    lname : "Doe",
    age : 30,
    occupation : "Developer"
}

for(const key in user)
{
    console.log(`${key} : ${user[key]}`);
}

//for-each loop
const arr = [10,20,30,40,50];
arr.forEach(x => console.log(x));