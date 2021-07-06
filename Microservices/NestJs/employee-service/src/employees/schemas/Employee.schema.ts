import { EmplopyeeTier, EmployeeStatus } from "../employee.enum";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'
// export const EmployeeSchema = {

//     id: String,
//     firstName: String,
//     lastName: String,
//     designation: String,
//     nearestCity: String,
//     tier: EmplopyeeTier,
//     status: EmployeeStatus,
// }

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {

    @Prop()
    id: String

    @Prop({ required: true })
    firstName: String
    
    @Prop({ required: true })
    lastName: String

    @Prop()
    designation: String

    @Prop()
    nearestCity: String

    @Prop()
    tier: EmplopyeeTier

    @Prop()
    status: EmployeeStatus
}

export const EmployeeSchema =  SchemaFactory.createForClass(Employee)