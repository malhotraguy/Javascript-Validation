var Password = prompt("enter Password");



function Program(Password){
var cond1 = ((Password.length) <= 9) && ((Password.length)>= 5);// checking the length
var cond2 = (Password.charAt (0)) != (Password.charAt (Password.length-1));// checking the 1st and last character is not same
var cond3 = ((Password.charAt (0) <= "9") && (Password.charAt (0)>= "0"));// checking the 1st character is number
var cond4 = (Password.charAt(Password.length-1).match(/^[0-9a-zA-Z]+$/));// checking last character to be non-alphanumeric
var IsValid= (cond1)&& (cond2) && (cond3) && (cond4) ;
 if (IsValid==false){
 alert("Your password does not meet the criteria of security"); 
 }
 else{
 var Conformation = prompt("Enter the Password again!");
 var IsIdentical =(Password==Conformation);
 if (IsIdentical==true){
 alert("You have set your password correctly.");
 }
 else{
 alert("You have not rewritten the same password");
 }
     }
                         }
Program(Password);
