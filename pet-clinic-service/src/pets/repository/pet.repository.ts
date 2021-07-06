import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePetDto } from "../dto/create-pet.dto";
import { UpdatePetDto } from "../dto/update-pet.dto";
import { Pet, PetDocument } from "../schemas/Pet.schema";
import * as mongoose from 'mongoose'

export class PetRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) { }

    async create(createPetDto: CreatePetDto): Promise<Pet> {
        let newPet = new this.petModel(createPetDto)
        return await newPet.save();
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find().populate("ownerId");
    }

    async findOne(id: string): Promise<Pet> {
        return await this.petModel.findOne({ _id: id })
    }

    // async update(id: number, updatePetDto: UpdatePetDto): Promise<Pet> {
    //     return ;
    // }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)
        let ret = await this.petModel.deleteOne({ _id: objId })
        return (ret.n === 1)
    }
}