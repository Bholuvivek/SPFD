

class Car{
    public carName:string;
    private cspeed:number;
    protected byear:number;


constructor(carName:string, cspeed:number, byear:number) {
    this.carName = carName;
    this.cspeed = cspeed;
    this.byear = byear;
    }
    accelerate(): void {
        this.cspeed += 10;
    }
}

class NewCar extends Car{
     chargeBattery():void{
        console.log("Battery is fully Charged");  
     }
}

const myCar = new Car("Thar", 100,2020)

console.log(myCar);

console.log(myCar.carName);
