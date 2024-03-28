let num1;
let num2;
let result;
function utilityFuntion(){
    num1=document.querySelector("#num1").value;
    num2=document.querySelector("#num2").value;
}
function multiplyNumbers(){
    utilityFuntion();
    result=num1*num2;
    document.querySelector("#result").textContent=result;
}
function divideNumbers(){
    utilityFuntion();
    result=num1/num2;
    document.querySelector("#result").textContent=result;
}
