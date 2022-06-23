let button = document.getElementById('btn');
var count = 0;

const total = document.getElementById("hasil-klik");

const hitungKlik = () => {
    count++;
    total.innerHTML = count;
}

button.addEventListener("click", hitungKlik);
button.addEventListener('click', check = () => {
    let nilai = document.getElementById('angka').value;
    const node = document.createElement('p');
    var textNode = document.createTextNode(nilai);

    if (count == 1) {
        if (nilai == 0) {
            textNode = document.createTextNode("Invalid Number");
            node.appendChild(textNode);
            document.getElementById("hasil").appendChild(node);
        } else {
            node.appendChild(textNode);
            document.getElementById("hasil").appendChild(node);
        }
    }else {
        if (nilai == 0) {
            textNode = document.createTextNode("Invalid Number");
            node.appendChild(textNode);
            document.getElementById("hasil").appendChild(node);
        } else if (nilai % 3 == 0 && nilai % 5 == 0) {
            textNode = document.createTextNode("FizzBuzz");
            node.appendChild(textNode);
            document.getElementById("hasil").appendChild(node);
        } else if (nilai % 3 == 0) {
            textNode = document.createTextNode("Buzz");
            node.appendChild(textNode);
            document.getElementById("hasil").appendChild(node);
        } else if (nilai % 5 == 0) {
            textNode = document.createTextNode("Fizz");
            node.appendChild(textNode);
            document.getElementById("hasil").appendChild(node);
        } else {
            node.appendChild(textNode);
            document.getElementById("hasil").appendChild(node);
        }
    }
})