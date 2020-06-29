let food = prompt("enter food number 1-3");






switch(food) {
    case "1":
     alert ("بيتزا");
      break;
    case "2":
      alert("باستا");
      break;
    case  "3":
    alert("برجر");
       break;
      default:
      alert("ارحل عن الموقع قبل ان اغضب عليك");
  }



let number1 = parseInt(prompt("enter number 1"));
let number2 = parseInt(prompt("enter number 2"));
let calculater = prompt("العملية ستكون *,-,+,/");

if(number1 && number2){

if (calculater == "+"){

  console.log(number1 + number2 )

 }
 
 else if (calculater == "-") {
   
    console.log(number1 - number2 ) 
 } 

 

 

 else if (calculater == "*"){

  console.log(number1 * number2 ) 

 }

 else if (calculater == "/"){

  console.log(number1 / number2 ) 
  
   }else{
console.log("wrong")
   }
  }

  switch(calculater) {
    case "+":
      console.log(number1 + number2 );
      break;
    case "-":
      console.log(number1 - number2 ) ;
      break;
    case "*":
 console.log(number1 * number2);
     break; 
 case"/":
 console.log(number1 / number2);
 
     break;
    default:
      console.log("erorr")
  }

let age = prompt("enter your age");

if(age < 5){
console.log("اذا انت في الروضه");
}
else if (5 > age < 17){
  console.log("اذا انت في المدرسة");
}
else{
  console.log("اذا انت في الحامعة");
}