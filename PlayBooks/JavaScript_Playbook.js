"use strict"; //This statement forces the compiler to behave according to modern Javascript Standards

var height; //Declares variables which can be re-declared
//Treats blocks like {} as normal and remains as global variable if delcareed inside them
//BUTTT Works like local if declared between functions

let height; //Declares variable but alos prevent it from bring re-declared somewhere else in the program
//Treats blocks{} separately and becomes local variables if declared inside the block 

console.log("Whatever you want to print",height," this");
//This gets printed in the Console tab of Inspect Element window when you open the HTML file to which this js file is linked to
//For concatenation,we can use either + or ,.We can also use console.log("Whatever you want to print ${height} this");
height=100;
console.log(height);
height="Hello"
console.log(height);
//Prints 100 and 200 in the next line but throws error as var and let both are there.

const weight="Less"; // This is right;afterwards,you can't re-declare weight="More" or some thing
/*
const heeight;
heeight=3; 

This is NOT valid
*/
let a=1;
{
    //This is a block.variable b is defined only till the bracket is closed
    let b=3;
    console.log(a+b);

}

function TestFunction()
{
    console.log("TestFunction has been called");
}

//This is called *Variable Shadowing*,ie global and local variables can be declared with the same name.
//Whenever the variable is used inside the block/function,the local value is used. 
let  counter  =  100;
console.log(counter);  //  ->  100
{
       counter  =  200;
       //if let counter=200 ,then outside console.log will print 100
       console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  200


/*This is called Hoisting.Whenever we declare a variable somewhere else in a prog.,the 
interpreter first goes through the program and places all the declarations of the variables 
at the starting of the program.THIS WORKS ONLY WITH VAR.
If we use let or const instead of var height,we'll get ReferenceError for the first log.*/
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 70;//If this is not there ,the previous statement gives ReferenceError:weight not defined.
console.log(weight); // -> 70

typeof 1990; //gives the type of the variable or data stored
/*
"undefined"
"object"
"boolean"
"number"
"bigint"
"string"
"symbol"
"function"          Has only these o/p values
*/

let e = 10; // decimal - default
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary

let big2 = 1n;//bigint data type

//Javascript also has Infinity,-Infinity and NaN(Not a Number) ONLY FOR NUMBER DATA TYPE,NOT FOR BIGINT

let message1 = 'The vessel \'Mars\' called at the port.';// -> The vessel 'Mars' called at the port.

let test = "100" - "10";// -> 90
let test = "100" + "10";// -> 10010
let str1 = 100  + + "10";// -> 110

//String interpolation
let  country  =  "Malawi";
let  continent  =  "Africa";
   
let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

//Autoboxing: whenever we encounter something like text.chatAt(3),the js interpreter sees the dot operator and 
//interprets "text" as an object instead of a variable to facilitate the method call.

let str="Hello World";
str.slice(0,3);//returns the substring from the 1st index(including) and last index(excluding)
str.slice(4);//return string from 3rd posotion till end of string
str.split(" ");//splits the string into strings whenever it encounters a character " ".This returns an array of substrings created.
str.length;//retrun length
str.charAt(4);//returns character at 3rd position

let a = 20 + "10";
let b = 20 + +"10";
let c = 20 + -"10" + "10";
let d = "10" - "10" + "100";
let e = "A" - "B" + 0xA;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);
//o/p: 2010, 30, 1010, 0100, NaN

typeof null;// -> object REMEMBER THIS!

const str = String(); //We can use this to either declare a string or mostly to use in type conversions.
const num = Number();
const bool = Boolean();//0,NaN,empty string,undefined,null - only these give false in boolean.Remaining all true
//Sometimes !!var is used to convert var into a boolean value.
//This is an object or record in javascript.To access,we use testObj.nr or testObj.str
let  testObj  = 
{
	nr:  600,
	str:  "text"
};

testObj.phone = "904-399-7557";//we can add new field to objects by assigning them
delete testObj.phone;//we can also delete fields

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let emptyArray = [];

let  users  =[  
    {
            name:  "Calvin",
            surname:  "Hart",
            age:  66,
            email:  "CalvinMHart@teleworm.us"
    },
    {
            name:  "Mateus",
            surname:  "Pinto",
            age:  21,
            email:  "MateusPinto@dayrep.com"
    }
];
//We can add new objects to the existing array by this:
users[2]  =  {
    name:  "Irene",
    surname:  "Purnell",
    age:  32,
    email:  "IreneHPurnell@rhyta.com"
}

//instanceof OPERATOR
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false


//ARRAYS
console.log(names.length); // -> 6
console.log(names.indexOf("Mateo")); // -> 2
names.push("Amelia");//adds element to end of array
names.unshift();//adds element to beginning of the array
names.pop();//removes element from end of array
names.shift();//removes elements from beginning of the array
names.reverse();//rverses the array so that the first index pertains to the last element
names.slice(2);//copies all elements from 3rd position till end
names.slice(2,5);//copies elements from 3rd position to 4th position
names.slice(3,-1);//copies elements from 4th position till the last but |-1| elements.
names.slice(-3).//copies last 3 elements,i.e |-3|

let newYear = year = 2051;
//above and below mean the same thing
let year = 2050;
year = 2051;
let newYear = year;

let str = "123";
let n1 = +str;//n1=123 as Number type,i.e. normal integer
let n2 = -str;//n2=-123,i.e this converts intp integer and also makes it negative

//Keep in mind that the Number type is a floating-point type, which means that the results of some of the
//operations may be imprecise.

t1&&t2 //->gives t1 if the whole thing is true and t2 if it is false
t1||t2//->gives t1 if the whole thing is false and t2 if it is true

let x = 0;
let y = 0;
console.log(x++ && y++);//This gives false and Js uses short-circuit evaluation,i.e. after it sees something is false,it won't even execute the next set of lines
//we can also use &&= and ||=

t1===t2//sees if t1 and t2 are the same operand & of same type.
t1==t2//sees if both operands are equal


<input id="myId" type="text"></input>//this is used to make a textbox and take input.
<button onClick="console.log(document.getElementById('myId').value)">Get Text</button>//This makes a button which,on pressing,prints the text in the text box into the console

//This gives an alert dialog box in the webpage printing the text written.
alert(text we want);
//This gives a confirm dialog box with 2 options of OK and Cancel with the text given
let msg=confirm("Is this final?");//gives false if pressed on cancel and true on pressing OK

//This prompts the user for OK,Cancel and a text-field
let name=prompt("text to be printed","default value for text field");

//all if..else,switch case,for,while,do..while loops same

for(let variable of array)//acts as for..each loop in Js
{
    //code to be executed
}

let user=
{
    name : Hemanth,
    age : 18
};
for(let variable in user)//cycles through object fields in an object
{
    console.log(variable);//prints Hemanth,18 
}


/*Function declarations are automatically moved to the top of the scope,
so we can use them before the declaration, as long as they are in the scope.So,

let name = Alice
showName(); // -> Alice
function showName() {
     console.log(name);
}
will work perfectly
*/

// while working with functions ,the parameters inside any function need not be declared inside the brackets
// They must only be mentioned.a function will be 
// function getSum(first,second){ }


//CALLBACK FUNCTIONS-Functions sent as parameters to another function
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');
/*This'll print 
test 1
outer 1
inner 1
outer 2
test 2*/

//ASYNCHRONOUS CALLBACK FUNCTIONS
let inner = function() {
    console.log('inner 1');
    }
     
    let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;//This adds a delay of 1000ms to call the function while the remaining program continues to run
    console.log('outer 2');
    }
     
    console.log('test 1');
    outer(inner);
    console.log('test 2');
/*O/P:
test 1
outer 1
outer 2
test 2 
inner 1(after delay of 1 s)
*/

let c=setInterval(function,delay);//executes the function periodically between the delat time periods
clearInterval(c);//stops the execution of the function above

window.addEventListener("click",execute());//executes execute() function after a MOUSE CLICK

//Arrow Function
let add = (a, b) => {//here (a,b) are parameters,add is the function name.
    return a + b;
}
console.log(add(10, 20)); // -> 30

//Exception handling
try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!

//throwing &creating new errors
function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20



console.time();
//code
console.timeEnd();
//They measure and print the time taken tby the compiler to execute both of these statements
            
//This is to add an action listener to a particular element
element.addEventListener("<event type>", <callback function>);


const hello=document.getElementById("id declared in the html tags of an element");