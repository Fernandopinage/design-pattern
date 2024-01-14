import ClassCar from "../Class/ClassCar";
import { VehicleFactory } from "../intefacesFactory/VehicleFactory";
import { Vehicle } from "../interfaces/Vehicle";

export  default class ClassCarFactory implements VehicleFactory{
    createVehicle(): Vehicle {
        return new ClassCar();
    }
}