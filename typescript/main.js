var test = false;
var id = 2;
// -----------
var decimal = 5.4;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// -----------
var nome = "Tácio";
var carro = 'Camaro';
var text = "\n\t<p>Meu Nome: " + nome + "</p>\n\t<p>Meu Carro: " + carro + "</p>\n";
document.body.innerHTML = text;
// -----------
var fruits = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);
var fruits = ["Apple", "Orange", "Lemon"];
console.log(fruits);
// -----------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color[2]);
console.log(Color);
// -----------
var listAll = 23;
console.log(listAll);
listAll = "String....";
console.log(listAll);
function printNumber(num) {
    alert(num);
}
printNumber(32);
// -----------
