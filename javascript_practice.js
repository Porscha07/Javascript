alert("Hello,World");

var practice = 14 % 3;

var x = prompt("what is my favorite sport?")
if (x == "soccer") {
	alert("You are correct")
}

//Printing Stuff
//alert("hello!");pop up box
console.log("hello, user");
document.write("howdy, user");

//variables
var fullName = "porscha johnson";
console.log(fullName);


//Booleans
var theTruth = true;
console.log(theTruth);
i = 1;
// console.log(i++);
console.log(++i);
// console.log(i);

//conditonals
var birthdayMonth = "september";
if(birthdayMonth == "october"){
  console.log("You are awesome!")
}else{
  console.log("You suck!")
}

//if-else statement

var practice = "what do you want to be when you grow up?";
x = "teacher";
if (x == "doctor") {
  console.log("go for it");
}
else if ( x == "lawyer") {
  console.log("dont do it");
}
else (x == "teach");{
 console.log("you have guessed correct");
}


var x =.999999;
console.log(Math.floor(x)); // 0 round down
console.log(Math.ceil(x)); //1 round up
console.log(parseInt(x));//0
console.log(Math.round(x));// 1 round up

//arrays
var students = [];
students=['daniel','merilee','chris','stephen'];
students.push('marissa');// adds an element to the end of the list
console.log(students);
students.pop([5]);//removed the last element of the array
console.log(students);
console.log(students.slice(0,2));//slice (will not alter your original values.also will count the first value, but not the second)
console.log(students.slice(1,4));//slice method
students.splice(1,2,"toby", "porscha");//splice method allows you to pop then push items into your array, can pass more than one arguement.
students.splice(4,1,"sam");
console.log(students);
console.log(students);
console.log(students.length);