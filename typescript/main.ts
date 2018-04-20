var test:boolean = false;
var id:number = 2;

// -----------

var decimal:number = 5.4;
var hex:number = 0xf00d;
var binary:number = 0b1010;
var octal:number = 0o744;

// -----------

var nome:string = "Tácio";
var carro:string = 'Camaro';
var text:string = `
	<p>Meu Nome: ${nome}</p>
	<p>Meu Carro: ${carro}</p>
`;

document.body.innerHTML = text;

// -----------

var fruits:string[] = ["Apple", "Watermelon", "Lemon"];

console.log(fruits);

var fruits:Array<string> = ["Apple", "Orange", "Lemon"];

console.log(fruits);

// -----------

enum Color {Red, Green, Blue};

console.log(Color.Red);
console.log(Color[2]);
console.log(Color);

// -----------

var listAll:any = 23;
console.log(listAll);
listAll = "String....";
console.log(listAll);

function printNumber(num:number):void {
	alert(num);
}

printNumber(32);

// -----------