import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateOwnerDto } from "../dto/create-owner.dto";
import { UpdateOwnerDto } from "../dto/update-owner.dto";
import { Owner, OwnerDocument } from "../schemas/Owner.schema";
import * as mongoose from 'mongoose'

export class OwnerRepository {

    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) { }

    async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
        let newOwner = new this.ownerModel(createOwnerDto)
        return await newOwner.save();
    }

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find();
    }

    async findOne(id: string): Promise<Owner> {
        return await this.ownerModel.findOne({ _id: id })
    }

    // async update(id: number, updateOwnerDto: UpdateOwnerDto): Promise<Owner> {
    //     return ;
    // }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)
        let ret = await this.ownerModel.deleteOne({ _id: objId })
        return (ret.n === 1)
    }
}