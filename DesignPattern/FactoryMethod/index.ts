import ClassBicycleFactory from "./ClassFactoryMethod/ClassBicycleFactory";
import ClassCarFactory from "./ClassFactoryMethod/ClassCarFactory";

const vehicle1 = new ClassCarFactory()
const car = vehicle1.createVehicle()

const vehicle2 = new ClassBicycleFactory()
const bicycle = vehicle2.createVehicle()