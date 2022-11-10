let output = document.getElementById("leuk")

function PlusCalculate() {
    let in1 = document.getElementById("input");
    let in2 = document.getElementById("input_1");
    
    let x = Number(in1.value);
    let y = Number(in2.value);

    output.innerText = x + y

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}

function MinusCalculate() {
    let in1 = document.getElementById("input");
    let in2 = document.getElementById("input_1");
    
    let x = Number(in1.value);
    let y = Number(in2.value);

    output.innerText = x - y

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}

function MultiplyCalculate() {
    let input1 = document.getElementById("in1");
    let input2 = document.getElementById("in2");
    
    let x = Number(in1.value);
    let y = Number(in2.value);

    output.innerText = x * y;

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}

function DivideCalculate() {
    let in1 = document.getElementById("input");
    let in2 = document.getElementById("input_1");
    
    let x = Number(in1.value);
    let y = Number(in2.value);

    output.innerText = x / y

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}