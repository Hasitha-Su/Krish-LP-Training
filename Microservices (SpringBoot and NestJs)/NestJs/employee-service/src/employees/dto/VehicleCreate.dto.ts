import { IsNotEmpty } from "class-validator"

export class VehicleCreateDto {

    id: string
    make: string
    // @IsNotEmpty()
    model: string
    vin: string
    employeeId: string 
}