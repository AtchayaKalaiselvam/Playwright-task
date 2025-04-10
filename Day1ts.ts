//Task 1: Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`)
console.log('---------------- Task1--------------------')
let username: string = 'Atchaya';
let score: number = 100;
console.log('Username='+username)
console.log('Score='+score)

//Task 2: Declare a variable that uses a union type and can hold either a number or a string
console.log('---------------- Task2--------------------')
let a: number | string;
a = 1;
console.log('a='+a)
a = 'One';
console.log('a='+a)


//Task 3: Create an array of numbers and print each number in the array
console.log('---------------- Task3--------------------')
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
    console.log('number=' +[numbers[i]]);
}



//Task 4: Subtraction with Type Declaration - Declare two variables `num1` and `num2` with type `number`.print their difference
console.log('---------------- Task4--------------------')
let num1: number = 18;
let num2: number = 8;
let difference: number = num1 - num2;
console.log('difference='+difference)


//Task 5: Average Calculation - Create a variable `scores` that holds an array of numbers. Calculate and print the average of the numbers in the array.
console.log('---------------- Task5--------------------')
let scores: number[] = [10, 20, 30, 40];
let value: number = 0;
for (let i = 0; i < scores.length; i++) {
    value += scores[i];
}
let average: number = value / scores.length;
console.log('average='+average)


//Task 6: Area of a Circle - Declare a variable `radius` with type `number`. Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π
console.log('---------------- Task6--------------------')
let radius: number = 5;
let area: number =  Math.PI* radius * radius;
console.log('Area='+area);
