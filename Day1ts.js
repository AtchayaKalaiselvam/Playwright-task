//Task 1: Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`)
console.log('---------------- Task1--------------------');
var username = 'Atchaya';
var score = 100;
console.log('Username=' + username);
console.log('Score=' + score);
//Task 2: Declare a variable that uses a union type and can hold either a number or a string
console.log('---------------- Task2--------------------');
var a;
a = 1;
console.log('a=' + a);
a = 'One';
console.log('a=' + a);
//Task 3: Create an array of numbers and print each number in the array
console.log('---------------- Task3--------------------');
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
for (var i = 0; i < numbers.length; i++) {
    console.log('number=' + [numbers[i]]);
}
//Task 4: Subtraction with Type Declaration - Declare two variables `num1` and `num2` with type `number`.print their difference
console.log('---------------- Task4--------------------');
var num1 = 18;
var num2 = 8;
var difference = num1 - num2;
console.log('difference=' + difference);
//Task 5: Average Calculation - Create a variable `scores` that holds an array of numbers. Calculate and print the average of the numbers in the array.
console.log('---------------- Task5--------------------');
var scores = [10, 20, 30, 40];
var value = 0;
for (var i = 0; i < scores.length; i++) {
    value += scores[i];
}
var average = value / scores.length;
console.log('average=' + average);
//Task 6: Area of a Circle - Declare a variable `radius` with type `number`. Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π
console.log('---------------- Task6--------------------');
var radius = 5;
var area = Math.PI * radius * radius;
console.log('Area=' + area);
