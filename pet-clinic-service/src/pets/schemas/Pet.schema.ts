import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Owner } from '../../owners/schemas/Owner.schema';
export type PetDocument = Pet & Document
import * as mongoose from 'mongoose'

@Schema()
export class Pet {

    @Prop()
    id: string

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    breed: string

    @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'Owner'})
    ownerId:Owner
}

export const PetSchema = SchemaFactory.createForClass(Pet)