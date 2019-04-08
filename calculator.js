var calculator_choice = prompt("Which calculator do you want to use? \n(1)Basic\n(2)Advanced\n(3)BMI Calculator\n(4)Trip calculator");

if(calculator_choice == 1){
var operation = prompt("What would you like to do?\n\n1. addition\n2.subtraction\n3.multiplication\n4.division", "Type your selection here");

  if(operation == 1){
  var number1 =parseInt(prompt("Enter the first number"));
  var number2 =parseInt(prompt("Enter the Second number"))
  alert("The sum is " + (number1+number2));
  }
  else if (operation == 2) {
    var number1 =parseInt(prompt("Enter the first number"));
    var number2 =parseInt(prompt("Enter the Second number"))
    alert("The difference is " + (number1-number2));
  }
  else if (operation == 3) {
    var number1 =parseInt(prompt("Enter the first number"));
    var number2 =parseInt(prompt("Enter the Second number"))
    alert("The product is " + (number1*number2));
  }
  else if (operation == 4) {
    var number1 =parseInt(prompt("Enter the first number"));
    var number2 =parseInt(prompt("Enter the Second number"))
    alert("The quotient is " + (number1/number2));
  }

}
else if(calculator_choice == 2){
  var operation = prompt("What would you like to do?\n\n1.Square root\n2.Power", "Type your selection here");

    if(operation == 1){
    var number1 =parseInt(prompt("Enter number"));
    alert("The square root is " + Math.sqrt(number1));
    }
    else if (operation == 2) {
    var number1 =parseInt(prompt("Enter the number"));
    var number2 =parseInt(prompt("Enter the power"));
    alert("The power is " + Math.pow(number1, number2));
    }
}
else if(calculator_choice == 3){
  var operation = prompt("What BMI system do you want to use?\n\n1.Metric 1\n2.Imperial")

  if(operation == 1){
  var number1 =parseInt(prompt("Enter your height in centimetres"));
  var number2 =parseInt(prompt("Enter your weight in kgs"));
  alert("Your BMI is " + (number2/number1/number1)*10000);}

  else if(operation == 2){
  var number1 =parseInt(prompt("Enter your height in inches"));
  var number2 =parseInt(prompt("Enter your weight in lbs"));
  alert("Your BMI is " + (number2*703/(number1*number1)));
  }
}

else if(calculator_choice == 4){

  var number1 =parseInt(prompt("Enter your distance in miles"));
  var number2 =parseInt(prompt("Enter your fuel efficiency in mpg"));
  var number3 =parseInt(prompt("Enter your cost per gallon in £'s"));
  var number4 =parseInt(prompt("Enter your speed in mph"));
  if(number4 > 60){
    number2 --- 2;
  }
  alert("Your trip will take " +(number1/number4)+" hours and it will cost £" +((number1/number2)*number3));

}
