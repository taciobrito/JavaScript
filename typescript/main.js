function getHello(nome) {
    return 'Hello ' + nome;
}
// var nome = 45;
var nome = 'Tácio';
document.body.innerHTML = getHello(nome);
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var camaro = new Car();
camaro.brand = "Chevrolet";
camaro.name = "Camaro";
// camaro.age = 2016;
camaro.power = 45;
getCar(camaro);
