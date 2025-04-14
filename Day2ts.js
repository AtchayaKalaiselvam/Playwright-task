//******************************************Conditional Statements******************************************
// Task 1: Program to check if a given number is odd or even
console.log('---------------- Task1--------------------');
function number(num) {
    if (num % 2 !== 0) {
        console.log("".concat(num, " is odd number"));
    }
    else {
        console.log("".concat(num, " is even number"));
    }
}
number(25);
// Task 2: Function that takes a grade and returns whether it is "Pass" or "Fail" based on a threshold value
console.log('---------------- Task2--------------------');
function Result(grade, value) {
    if (value === void 0) { value = 90; }
    return grade >= value ? "Pass" : "Fail";
}
console.log(Result(80));
// Task 3: Program to determine the type of triangle (equilateral, isosceles, or scalene) based on its sides
console.log('---------------- Task3--------------------');
function TriangleType(x, y, z) {
    if (x === y && y === z) {
        return "It is Equilateral Triangle";
    }
    else if (x === y || y === z || x === z) {
        return "It is Isosceles Triangle";
    }
    else {
        return "It is Scalene Triangle";
    }
}
var x = 8, y = 0, z = 1;
console.log("The triangle is: ".concat(TriangleType(x, y, z)));
// Task 4: Program to check if a string is a palindrome or not
console.log('---------------- Task4--------------------');
function Palindrome(str) {
    var name = str.toLowerCase().replace(/\s+/g, '');
    var reversename = name.split('').reverse().join('');
    return name === reversename;
}
var result = "Atchaya";
console.log("\"".concat(result, "\" is ").concat(Palindrome(result) ? "a" : "not a", " Palindrome"));
// Task 5: Program that checks if a given year is a leap year
console.log('---------------- Task5--------------------');
function leapyear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log("".concat(year, " is a leap year"));
    }
    else {
        console.log("".concat(year, " is not a leap year"));
    }
}
leapyear(2024);
//******************************************Loops******************************************
// Task 1: Program to print the first 10 numbers in the Fibonacci sequence
console.log('---------------- Task1--------------------');
function Fibonacci(num) {
    var a = 0, b = 1;
    console.log("Fibonacci sequence:");
    for (var i = 0; i < num; i++) {
        console.log(a);
        var series = a + b;
        a = b;
        b = series;
    }
}
Fibonacci(10);
// Task 2: Program that prints all prime numbers between 1 and 100
console.log('---------------- Task2--------------------');
for (var i = 2; i <= 100; i++) {
    var isPrime = true;
    for (var j = 2; j < i; j++) {
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
function reverseString(str) {
    var reversed = "";
    for (var i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
var given = "Homework";
console.log("Reverse value is: ".concat(reverseString(given)));
// Task 4: Program to calculate the factorial of a given number using a loop
console.log('---------------- Task4--------------------');
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
var num = 5;
console.log("Factorial of ".concat(num, " is: ").concat(factorial(num)));
// Task 5: Program to generate a multiplication table for numbers 1 to 10
console.log('---------------- Task5--------------------');
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
    }
}
//******************************************Functions******************************************
// Task 1: Function that calculates the area of a circle given its radius
console.log('---------------- Task1--------------------');
function CircleArea(radius) {
    return Math.PI * radius * radius;
}
var circleradius = 5;
console.log("Area of circle ".concat(circleradius, " is: ").concat(CircleArea(circleradius).toFixed(2)));
// Task 2: Function to check if a number is positive, negative, or zero
console.log('---------------- Task2--------------------');
function checkNumber(numb) {
    if (numb > 0)
        return "".concat(numb, " is Positive");
    else if (numb < 0)
        return "".concat(numb, " is Negative");
    else
        return "".concat(numb, " is Zero");
}
var numd = -7;
console.log(checkNumber(numd));
// Task 3: Function that takes an array of numbers and returns the sum of all the numbers
console.log('---------------- Task3--------------------');
function sumArray(arrayname) {
    var sum = 0;
    for (var _i = 0, arrayname_1 = arrayname; _i < arrayname_1.length; _i++) {
        var num_1 = arrayname_1[_i];
        sum += num_1;
    }
    return sum;
}
var array = [10, 20, 30, 40];
console.log("Sum of array: ".concat(sumArray(array)));
// Task 4: Implement a function to find the maximum value in an array.
console.log('---------------- Task4--------------------');
function maxArray(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
var arrayvalue = [15, 22, 8, 42, 19];
console.log("Maximum value is: ".concat(maxArray(arrayvalue)));
// Task 5: Create a function that reverses the words in a given sentence.
console.log('---------------- Task5--------------------');
function reverse(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
var inputSentence = "Be Happy";
var reversed = reverse(inputSentence);
console.log("Original: ".concat(inputSentence));
console.log("Reversed: ".concat(reversed));
//******************************************Named Functions******************************************
// Task 1: Write a named function to convert a temperature from Celsius to Fahrenheit.
console.log('---------------- Task1--------------------');
function CelsiusToFahrenheit(temp) {
    var fahrenheit = (temp * 1.8) + 32;
    console.log(fahrenheit);
}
CelsiusToFahrenheit(30);
// Task 2: Create a named function that finds the factorial of a number
console.log('---------------- Task2--------------------');
function Factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
var input = 2;
console.log("Factorial of ".concat(input, " is: ").concat(Factorial(input)));
// Task 3: Implement a named function that checks if a given string contains vowels.
console.log('---------------- Task3--------------------');
function containsVowels(str) {
    var vowels = /[aeiouAEIOU]/;
    return vowels.test(str);
}
var val = "Atchaya";
console.log("val contain vowels? ".concat(containsVowels(val)));
// Task 4: Named function to determine if a given year is a leap year
// Task 5: Named function that returns the greatest common divisor (GCD) of two numbers.
console.log('---------------- Task5--------------------');
function GCD(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
var value1 = 10;
var value2 = 20;
console.log("GCD of ".concat(value1, " and ").concat(value2, " is: ").concat(GCD(value1, value2)));
//******************************************Arrow Functions******************************************
// Task 1: Write an arrow function to find the square of a number.
console.log('---------------- Task1--------------------');
var square = function (num) { return num * num; };
var findnumber = 7;
console.log("Square of number is: ".concat(square(findnumber)));
// Task 2: Create an arrow function that filters out even numbers from an array.
console.log('---------------- Task2--------------------');
var filterEvens = function (arr) { return arr.filter(function (num) { return num % 2 == 0; }); };
var findeven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("even number =: ".concat(filterEvens(findeven)));
//task 3: Implement an arrow function that calculates the average of a list of numbers.
console.log('---------------- Task3--------------------');
var calculateAverage = function (numbers) {
    var total = numbers.reduce(function (acc, val) { return acc + val; }, 0);
    return numbers.length ? total / numbers.length : 0;
};
var nums = [10, 20, 30, 40, 50];
console.log("Average of list is : ".concat(calculateAverage(nums)));
//task 4: Write an arrow function to return the length of the longest string in an array.
console.log('---------------- Task4--------------------');
var StringLength = function (arr) {
    return arr.reduce(function (max, str) { return Math.max(max, str.length); }, 0);
};
var strings = ["Suvetha", "Atchaya", "Harini"];
console.log("Length of the longest string: ".concat(StringLength(strings)));
//task 5: Use an arrow function to map over an array and return each number squared.
var squareNumbers = function (arr) { return arr.map(function (num) { return num * num; }); };
var squareroot = [1, 2, 3, 4, 5];
console.log("Squared numbers: ".concat(squareNumbers(squareroot)));
