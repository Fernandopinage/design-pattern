import { Vehicle } from "../interfaces/Vehicle";

export interface VehicleFactory{
    createVehicle(): Vehicle;
}