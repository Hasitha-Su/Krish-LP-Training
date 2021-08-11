import { EmployeeStatus } from "../employee.enum";
import { IsIn } from "class-validator"

export class EmployeeSeacrhDto {
    @IsIn(Object.values(EmployeeStatus))
    status: EmployeeStatus
    name: string
}