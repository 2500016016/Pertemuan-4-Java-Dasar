
function hitungLuas(panjang, lebar) {
 return panjang * lebar;
}
let luas1 = hitungLuas(5, 8);
let luas2 = hitungLuas(10, 3);

console.log("Luas persegi panjang dengan panjang 5 dan lebar 8 adalah: " + luas1);
console.log("Luas persegi panjang dengan panjang 10 dan lebar 3 adalah: " + luas2);

document.getElementById("hasil").innerHTML = `
    <p>Luas persegi panjang dengan panjang 5 dan lebar 8 adalah: ${luas1}</p>
    <p>Luas persegi panjang dengan panjang 10 dan lebar 3 adalah: ${luas2}</p>
    `;

let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function() {
 document.body.style.backgroundColor = "#e8f4fc";
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function() {
 document.body.style.color = "#2c3e50";
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
 let currentSize = parseInt(getComputedStyle(document.body).fontSize);
 document.body.style.fontSize = (currentSize + 1) + "px";
};

let outputDiv = document.getElementById("output3");
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);