let out = 0;
function pressed() {
    if (out == 10) out = -1;
    let output = document.getElementById("output");
    output.innerText = out;
    out += 1;
}
