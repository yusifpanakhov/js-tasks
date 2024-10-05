//EASY
//1
let name= "yusif";
console.log(name);

//2
let fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];
console.log(fruits[0]);

//3
let person = ['yusif', '13', 'programmer'];
console.log(fruits[2]);

//4
function square(number) {
    return number * number;
}
console.log(square(5));

//5
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//6
function evenOrodd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//7
let numbers = ["1", "2", "3"];
fruits.push("4");

//9
const sum = function(a, b) {
    return a + b;
};

//10
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

//12
let colors = ["green", "red", "yellow", "blue"];
let removedColor = colors.shift();
console.log(colors);

//13
let name = "yusif";
console.log(`Hello, ${name}!`);

//14
let colors = ["green", "red", "yellow", "blue"];
let size = colors.length; 

console.log(size);  


//MEDIUMS
//16
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;  
});

console.log(evenNumbers);

//19
let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}

//21
let person = {
    firstName: "yusif",
    lastName: "panakhov",
    FullName: function() {
        return `${this.firstName} ${this.lastName}`; 
    }
};
console.log(person.FullName()); 

//26
function reverseString(str) {
    return str.split('').reverse().join(''); 
}

console.log(reverseString("Hello")); 

//HARD
//32
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorial(n - 1); 
}

console.log(factorial(5)); 

