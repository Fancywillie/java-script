const operator = prompt("Enter operator (+, -, *, /)");
const num1 = parseFloat(prompt("Enter First Number: "));
const num2 = parseFloat(prompt("Enter Second Number: "));
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert("Wrong Input! Please refresh and provide correct data");
}else{

    if(operator == "+"){
        result = num1 + num2;
        prompt("Your answer is" +" "+ result);
    }else if(operator == "-"){
        result = num1 - num2;
        prompt("Your answer is" +" "+ result);
    }else if(operator == "*"){
        result = num1 * num2;
        prompt("Your answer is" +" "+ result);
    }else if(operator == "/"){
        result = num1 / num2;
        prompt("Your answer is" +" "+ result);
    }
    document.write(num1 + operator + num2 +" = " + result);
}
