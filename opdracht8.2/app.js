let output = document.getElementById("leuk")

function plusCalculate() 
{
    let input1 = document.getElementById("in1")
    let input2 = document.getElementById("in2")
    let x = Number(in1.value);
    let y = Number(in2.value);
    output.innerText = x + y;

    if (x < 0 || y < 0) output.innerText = "het getal is te laag"
}

function minusCalculate() 
{
    let in1 = document.getElementById("in1")
    let in2 = document.getElementById("in2")
    let x = Number(in1.value);
    let y = Number(in2.value);
    output.innerText = x - y;

    if (x < 0 || y < 0) output.innerText = "het getal is te laag"
}

function timesCalculate() 
{
    let in1 = document.getElementById("in1")
    let in2 = document.getElementById("in2")
    let x = Number(in1.value);
    let y = Number(in2.value);
    output.innerText = x * y;

    if (x < 0 || y < 0) output.innerText = " het getal is te laag"
}

function divideCalculate() 
{
    let in1 = document.getElementById("in1")
    let in2 = document.getElementById("in2")
    let x = Number(in1.value);
    let y = Number(in2.value);
    output.innerText = x / y;

    if (x < 0 || y < 0) output.innerText = "het getal is te laag"
}