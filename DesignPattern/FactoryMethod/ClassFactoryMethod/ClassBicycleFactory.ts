import ClassBicycle from "../Class/ClassBicycle";
import { VehicleFactory } from "../intefacesFactory/VehicleFactory";
import { Vehicle } from "../interfaces/Vehicle";

export default class ClassBicycleFactory implements VehicleFactory{
    createVehicle(): Vehicle {
        return new ClassBicycle();
    }
}