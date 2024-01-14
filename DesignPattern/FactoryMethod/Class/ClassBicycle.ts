import { Vehicle } from "../interfaces/Vehicle";

export default class ClassBicycle implements Vehicle{
    drive(): void {
        console.log("Carro em movimento!");
    }
}

//Vehicle