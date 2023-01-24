function add() {
    var num1, num2, num3;
    num1 = Number(document.getElementById("t1").value);
    num2 = Number(document.getElementById("t2").value);
    num3 = num1 + num2;
    document.getElementById("ans").innerHTML = "Addition is = " +num3;
}
function sub() {
    var num1, num2, num3;
    num1 = Number(document.getElementById("t1").value);
    num2 = Number(document.getElementById("t2").value);
    num3 = num1 - num2;
    document.getElementById("ans").innerHTML = "Subtraction is = " +num3;
}

function mul() {
    var num1, num2, num3;
    num1 = Number(document.getElementById("t1").value);
    num2 = Number(document.getElementById("t2").value);
    num3 = num1 * num2;
    document.getElementById("ans").innerHTML = "Multiplication is = " +num3;
}

function div() {
    var num1, num2, num3;
    num1 = Number(document.getElementById("t1").value);
    num2 = Number(document.getElementById("t2").value);
    num3 = num1 / num2;
    document.getElementById("ans").innerHTML = "Division is = " +num3;
}

function power() {
    var num1, num2, num3;
    num1 = Number(document.getElementById("t1").value);
    num2 = Number(document.getElementById("t2").value);
    num3 = num1 ** num2;
    document.getElementById("ans").innerHTML = "Power of = " +num3;
}

