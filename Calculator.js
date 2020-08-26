

alert("Use a calculator");

let ask = prompt("What opperation do you want? Sum/Subtract/Divide/Multiply/Power/Square Root");
console.log("You would like to use   " + ask );

if (ask == "Sum" ){
    let firstNum = prompt("Enter first number");
    firstNum = parseFloat(firstNum, 10);
    let secondNum = prompt("Enter second number?");
    secondNum = parseFloat(secondNum,10);
    function addNumbers(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    console.log(addNumbers(firstNum,secondNum));
    
} else {
    if (ask == "Subtract"){
        let firstNum = prompt("Enter first number");
        firstNum = parseFloat(firstNum, 10);
        let secondNum = prompt("Enter second number?");
        secondNum = parseFloat(secondNum, 10);
        function takeAway(firstNum,secondNum) {
            return firstNum - secondNum;
        }
   
        console.log(takeAway(firstNum,secondNum));
    } else {
        if (ask == "Multiply"){
           let firstNum = prompt("Enter first number");
           firstNum = parseFloat(firstNum, 10);
           let secondNum = prompt("Enter second number?");
            secondNum = parseFloat(secondNum, 10);
            function Multi (firstNum,secondNum) {
                return firstNum * secondNum;
            }

            console.log(Multi(firstNum, secondNum));
       } else {
           if (ask == "Divide"){
                let firstNum = prompt("Enter first number");
                firstNum = parseFloat(firstNum, 10);
                let secondNum = prompt("Enter second number?");
                secondNum = parseFloat(secondNum, 10);
                function divide (firstNum,secondNum){
                    return firstNum / secondNum;
                }

                console.log(divide(firstNum,secondNum));

            } else {
                if (ask == "Power"){
                    let firstNum = prompt("Enter first number");
                    firstNum = parseFloat(firstNum, 10);
                    let secondNum = prompt("Enter second number?");
                    secondNum = parseFloat(secondNum, 10);
                    function power(firstNum,secondNum) {
                        return Math.pow(firstNum,secondNum);
                    }

                console.log(power(firstNum,secondNum));

                } else {
                    if (ask == "Square Root"){
                        let firstNum = prompt("Enter first number");
                        firstNum = parseFloat(firstNum, 10);
                        function squareRoot(firstNum) {
                            return Math.sqrt(firstNum);
                        }

                        console.log(squareRoot(firstNum));
                    }
                }
            }
        }
    }
}
