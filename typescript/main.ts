function getHello(nome:string) {
	return 'Hello ' + nome;
}

// var nome = 45;
var nome = 'Tácio';

document.body.innerHTML = getHello(nome);

interface iCar {
	brand:string;
	name:string;
	power:number;
}

class Car {
	brand:string;
	name:string;
	// age:number;
	power:number;
}

var getCar = function(car:iCar){
	console.log(car.brand, car.name, car.power);
};

var camaro = new Car();
camaro.brand = "Chevrolet";
camaro.name = "Camaro";
// camaro.age = 2016;
camaro.power = 45;

getCar(camaro);