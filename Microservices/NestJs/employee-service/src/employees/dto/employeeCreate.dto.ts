// import { EmplopyeeTier, EmployeeStatus } from "./employee.model"
import { EmplopyeeTier, EmployeeStatus } from "../employee.enum"
import { IsNotEmpty } from "class-validator"

export class EmployeeCreateDto {

    id: string

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    // @NotEquals("CEO")
    designation: string
    nearestCity: string
    tier: EmplopyeeTier
    status: EmployeeStatus
}