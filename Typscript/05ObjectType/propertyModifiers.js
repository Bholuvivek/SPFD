var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(carName, cspeed, byear) {
        this.carName = carName;
        this.cspeed = cspeed;
        this.byear = byear;
    }
    Car.prototype.accelerate = function () {
        this.cspeed += 10;
    };
    return Car;
}());
var NewCar = /** @class */ (function (_super) {
    __extends(NewCar, _super);
    function NewCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCar.prototype.chargeBattery = function () {
        console.log("Battery is fully Charged");
    };
    return NewCar;
}(Car));
var myCar = new Car("Thar", 100, 2020);
console.log(myCar);
console.log(myCar.carName);
