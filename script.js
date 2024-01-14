// JavaScript Output

// document.getElementById("root").innerHTML="I am Ome";
// document.write("I am a competitive Programmer.");
// console.log("Hello World.")


// User Input

// var x;
// x=prompt("Enter Your Name");
// document.write(x);



// TASK - 2

// var firstName=prompt('Enter first name: ');
// var lastName=prompt('Enter last name: ');

// var fullName=firstName + ' ' + lastName;

// document.write("My name is " + fullName +"<br/>");
// document.write("Total length "+ fullName.length + "<br/>");
// document.write("Full name in uppercase : " + fullName.toUpperCase() + "<br/>");
// document.write("Second character of my name: " + fullName.charAt(2));




// TASK - 3


// var num1=prompt("Enter first number : ");
// var num2=prompt("Enter second number : ");

// num1=parseInt(num1,10);
// num2=parseInt(num2,10);

// document.write("Summation of " + num1 + " and " + num2 + " is : " + (num1+num2) + "<br/>");
// document.write("Subtraction of " + num1 + " and " + num2 + " is : " + (num1-num2) + "<br/>");
// document.write("Multiplication of " + num1 + " and " + num2 + " is : " + (num1*num2) + "<br/>");
// document.write("Division of " + num1 + " and " + num2 + " is : " + (num1/num2) + "<br/>");
// document.write("Modulization of " + num1 + " and " + num2 + " is : " + (num1%num2));




// TASK - 5

// var letter=prompt("Enter a letter : ");

// letter=letter.toLocaleLowerCase();

// switch(letter)
// {
//     case 'a':
//     document.write("vowel");
//     break;
    
//     case 'e':
//     document.write("vowel");
//     break;

//     case 'i':
//     document.write("vowel");
//     break;

//     case 'o':
//     document.write("vowel");
//     break;

//     case 'u':
//     document.write("vowel");
//     break;

//     default:
//     document.write("Consonant");
// }


// TASK - 6

// var sum=0,i=1;

// while(i<=100)
// {
//     if(i%3==0 && i%5==0)sum+=i;
//     i++;
// }

// document.write(sum);



// TERNARY OPERATOR

// var number = Number(prompt("Enter a number "));
// var result = number>0 ? "positive" : number < 0 ? "negative" : "zero";
// document.write(result);



// TASK - 7


// function addition(x,y){
//     var add = x + y;
//     document.write("Addition : " + add + "<br>");
// }

// function subtraction(x,y){
//     var sub= x -y;
//     document.write("Subtraction : " + sub + "<br>");
// }

// function multiplication(x,y){
//     var multi = x*y;
//     document.write("Multiplication : " + multi + "<br>");
// }

// function division(x,y){
//     var div = x/y;
//     document.write("Division : " + div + "<br>");
// }


// addition(20,30);
// subtraction(50,35);
// multiplication(5,3);
// division(10,5);




// IIFE ( Immediately Invokeable Function Expression)

// TASK - 8 

// (function summation(x,y){
//     console.log(x+y);
// })(12,13);



// function Expression 

// var message = function displayMessage(msg){
//     console.log(msg);
// }

// message("Hello");





// ARRAY 



// var names = ["Moynol", "Hasan", "Ome"];
// console.log(names);
// console.log(names.length);

// names.push("Samia");
// console.log(names);
// console.log(names.length);

// names.push("Akter");
// console.log(names);
// console.log(names.length);



var num = [10,20,30,40,50,60,70,80,90];

for(var i=0;i<9;i++){
    console.log(num[i]);
}