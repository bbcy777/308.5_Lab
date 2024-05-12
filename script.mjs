// //Part 1: Thinking Functionally

// // Take an array of numbers and return the sum.
// // Take an array of numbers and return the average.
// // Take an array of strings and return the longest string.
// // Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

// function arrayNumSum(array) {
//     let sum = 0;
//     for (let i = 0; i<array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// function arrayNumAvg(array) {
//     return(arrayNumSum(array)/array.length);
// }

// // let array = [2, 4, 6, 8];
// // console.log(arrayNumAvg(array));

// function arrayStr(arrayS) {
//     let len = 0;
//     for (let i = 0; i < arrayS.length; i++) {
//         if (arrayS[i].length > len) {
//             len = arrayS[i];
//         }
//     }
//     return len;
// }

// function arrayLen(arrayS, num) {
//     new_array = [];
//     for (let str of arrayS) {
//         if (str.length > num) {
//             new_array.push(str);
//         }
//     }
//     return new_array;
// }
// //Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// function list_num(num) {
//     if (num > 1) {
//         list_num(num - 1);
//     }
//     return console.log(num);
// }

// //Part 2: Thinking Methodically
// // When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
// // For the tasks below, use the following data to test your work:
let people = [{ id: "42", name: "Bruce", occupation: "Knight" },
    { id: "48", name: "Barry", occupation: "Runner"},
    { id: "57", name: "Bob", occupation: "Fry Cook"},
    { id: "63", name: "Blaine", occupation: "Quiz Master"},
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// // Use callback functions alongside Array methods to accomplish the following:
// // Sort the array by age.
// function sortAge (a, b) {
//     return parseInt(a.age) - parseInt(b.age);
// }
// people.sort(sortAge);

// // Filter the array to remove entries with an age greater than 50.
// people = people.filter(obj => parseInt(obj.age)<= 50);

// // Map the array to change the “occupation” key to “job” and increment every age by 1.
// people.forEach((row) => {
//     row.job = row.occupation;
//     delete row.occupation;
//     row.age = parseInt(row.age) + 1;
// })
// // console.log(people)

// // Use the reduce method to calculate the sum of the ages.
// // Then use the result to calculate the average age.
// let sum = people.reduce((accumulator, currentValue) => {return accumulator + currentValue.age; }, 0);

// let avgAge = sum / people.length;
// console.log(avgAge);

// Part 3: Thinking Critically
// It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.
function ageAdd1 (obj){
    obj.forEach((row) => {
        row.age = parseInt(row.age) + 1;}
    )
}

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
function copyAdd (obj) {
    let new_obj = JSON.parse(JSON.stringify(obj));
    new_obj.forEach((row) => {
        row.age = parseInt(row.age) + 1;})
    return new_obj;
    }

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
function addAge (obj) {
    obj.forEach((row) => {
        if(!(`age` in obj)) {
            row.age = 0;
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let month = currentDate.getMonth() + 1;
            let day = currentDate.getDate();
            let date = `${year}-${month}-${day}`;
            row.updated_at = date;
        }
    })
}