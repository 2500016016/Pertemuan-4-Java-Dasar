let angka1 = document.getElementById("angka1").value;
let angka2 = document.getElementById("angka2").value;

angka1 = parseFloat(angka1);
angka2 = parseFloat(angka2);

if (operator === "+") {
    hasil = angka1 + angka2;
}
else if (operator === "-") {
    hasil = angka1 - angka2;
}
else if (operator === "*") {
    hasil = angka1 * angka2;
}
else if (operator === "/") {
    hasil = angka1 / angka2;
}

document.getElementById("hasil").textContent =
    "Hasil: " + hasil;