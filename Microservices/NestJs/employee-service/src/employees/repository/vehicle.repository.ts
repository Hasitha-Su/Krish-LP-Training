import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VehicleCreateDto } from "../dto/VehicleCreate.dto";
import { Vehicle, VehicleDocument } from "../schemas/Vehicle.schemas";

@Injectable()
export class VehicleRepository {

    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>){}

    async create(vehicleDto:VehicleCreateDto): Promise<Vehicle> {
        let newVehicle = new this.vehicleModel(vehicleDto)
        return await newVehicle.save()
    }

    async findAll(){
        // return await this.vehicleModel.find();
        return await this.vehicleModel.find().populate("employeeId");
    }
} 