//******************************************Conditional Statements******************************************

// Task 1: Program to check if a given number is odd or even
console.log('---------------- Task1--------------------');
function number(num: number): void {
    if (num % 2 !== 0) {
        console.log(`${num} is odd number`);
    } else {
        console.log(`${num} is even number`);
    }
}
number(25);

// Task 2: Function that takes a grade and returns whether it is "Pass" or "Fail" based on a threshold value
console.log('---------------- Task2--------------------');
function Result(grade: number, value: number = 90): string {
    return grade >= value ? "Pass" : "Fail";
}
console.log(Result(80));

// Task 3: Program to determine the type of triangle (equilateral, isosceles, or scalene) based on its sides
console.log('---------------- Task3--------------------');
function TriangleType(x: number, y: number, z: number): string {
    if (x === y && y === z) {
        return "It is Equilateral Triangle";
    } else if (x === y || y === z || x === z) {
        return "It is Isosceles Triangle";
    } else {
        return "It is Scalene Triangle";
    }
}
const x = 8, y = 0, z = 1;
console.log(`The triangle is: ${TriangleType(x, y, z)}`);

// Task 4: Program to check if a string is a palindrome or not
console.log('---------------- Task4--------------------');
function Palindrome(str: string): boolean {
    const name = str.toLowerCase().replace(/\s+/g, '');
    const reversename = name.split('').reverse().join('');
    return name === reversename;
}
const result = "Atchaya";
console.log(`"${result}" is ${Palindrome(result) ? "a" : "not a"} Palindrome`);

// Task 5: Program that checks if a given year is a leap year
console.log('---------------- Task5--------------------');
function leapyear(year: number): void {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
leapyear(2024);

//******************************************Loops******************************************

// Task 1: Program to print the first 10 numbers in the Fibonacci sequence
console.log('---------------- Task1--------------------');
function Fibonacci(num: number): void {
    let a = 0, b = 1;
    console.log("Fibonacci sequence:");
    for (let i = 0; i < num; i++) {
        console.log(a);
        const series = a + b;
        a = b;
        b = series;
    }
}
Fibonacci(10);

// Task 2: Program that prints all prime numbers between 1 and 100
console.log('---------------- Task2--------------------');
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

// Task 3: Program to reverse a string using a loop
console.log('---------------- Task3--------------------');
function reverseString(str: string): string {
    let reversed = "";
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
const given = "Homework";
console.log(`Reverse value is: ${reverseString(given)}`);

// Task 4: Program to calculate the factorial of a given number using a loop
console.log('---------------- Task4--------------------');
function factorial(num: number): number {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
const num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);

// Task 5: Program to generate a multiplication table for numbers 1 to 10
console.log('---------------- Task5--------------------');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//******************************************Functions******************************************

// Task 1: Function that calculates the area of a circle given its radius
console.log('---------------- Task1--------------------');
function CircleArea(radius: number): number {
    return Math.PI * radius * radius;
}
const circleradius = 5;
console.log(`Area of circle ${circleradius} is: ${CircleArea(circleradius).toFixed(2)}`);

// Task 2: Function to check if a number is positive, negative, or zero
console.log('---------------- Task2--------------------');
function checkNumber(numb: number): string {
    if (numb > 0) return `${numb} is Positive`;
    else if (numb < 0) return `${numb} is Negative`;
    else return `${numb} is Zero`;
}
const numd = -7;
console.log(checkNumber(numd));

// Task 3: Function that takes an array of numbers and returns the sum of all the numbers
console.log('---------------- Task3--------------------');
function sumArray(arrayname: number[]): number {
    let sum = 0;
    for (let num of arrayname) {
        sum += num;
    }
    return sum;
}
const array = [10, 20, 30, 40];
console.log(`Sum of array: ${sumArray(array)}`);

// Task 4: Implement a function to find the maximum value in an array.
console.log('---------------- Task4--------------------');
function maxArray(array: number[]): number {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

const arrayvalue: number[] = [15, 22, 8, 42, 19];
console.log(`Maximum value is: ${maxArray(arrayvalue)}`);

// Task 5: Create a function that reverses the words in a given sentence.
console.log('---------------- Task5--------------------');
function reverse(sentence: string): string {
    return sentence.split(" ").reverse().join(" ");
}
const inputSentence = "Be Happy";
const reversed = reverse(inputSentence);
console.log(`Original: ${inputSentence}`);
console.log(`Reversed: ${reversed}`);

//******************************************Named Functions******************************************

// Task 1: Write a named function to convert a temperature from Celsius to Fahrenheit.
console.log('---------------- Task1--------------------');
function CelsiusToFahrenheit(temp: number): void {
    const fahrenheit = (temp * 1.8) + 32;
    console.log(fahrenheit);
}
CelsiusToFahrenheit(30);

// Task 2: Create a named function that finds the factorial of a number
console.log('---------------- Task2--------------------');
function Factorial(num: number): number {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
const input = 2;
console.log(`Factorial of ${input} is: ${Factorial(input)}`);

// Task 3: Implement a named function that checks if a given string contains vowels.
console.log('---------------- Task3--------------------');
function containsVowels(str: string): boolean {
    const vowels = /[aeiouAEIOU]/;
    return vowels.test(str);
}

const  val= "Atchaya";
console.log(`val contain vowels? ${containsVowels(val)}`);

// Task 4: Named function to determine if a given year is a leap year

// Task 5: Named function that returns the greatest common divisor (GCD) of two numbers.
console.log('---------------- Task5--------------------');
function GCD(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const value1 = 10;
const value2 = 20;
console.log(`GCD of ${value1} and ${value2} is: ${GCD(value1, value2)}`);

//******************************************Arrow Functions******************************************

// Task 1: Write an arrow function to find the square of a number.
console.log('---------------- Task1--------------------');

const square = (num: number): number => num * num;

const findnumber = 7;
console.log(`Square of number is: ${square(findnumber)}`);

// Task 2: Create an arrow function that filters out even numbers from an array.
console.log('---------------- Task2--------------------')
const filterEvens = (arr: number[]): number[] => arr.filter(num => num % 2 == 0);

const findeven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`even number =: ${filterEvens(findeven)}`);

//task 3: Implement an arrow function that calculates the average of a list of numbers.
console.log('---------------- Task3--------------------')
const calculateAverage = (numbers: number[]): number => {
    const total = numbers.reduce((acc, val) => acc + val, 0);
    return numbers.length ? total/ numbers.length : 0;
};

const nums = [10, 20, 30, 40, 50];
console.log(`Average of list is : ${calculateAverage(nums)}`);

//task 4: Write an arrow function to return the length of the longest string in an array.
console.log('---------------- Task4--------------------')
const StringLength = (arr: string[]): number => {
    return arr.reduce((max, str) => Math.max(max, str.length), 0);
};

const strings = ["Suvetha", "Atchaya", "Harini"];
console.log(`Length of the longest string: ${StringLength(strings)}`);

//task 5: Use an arrow function to map over an array and return each number squared.
const squareNumbers = (arr: number[]): number[] => arr.map(num => num * num);

const squareroot = [1, 2, 3, 4, 5];
console.log(`Squared numbers: ${squareNumbers(squareroot)}`);
