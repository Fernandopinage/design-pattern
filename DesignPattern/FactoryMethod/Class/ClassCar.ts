import { Vehicle } from "../interfaces/Vehicle";

export default class ClassCar implements Vehicle{
    drive(): void {
        console.log("Carro em movimento!");
    }
}