//import { EmployeeStatus } from "./employee.model";
import { EmployeeStatus } from "../employee.enum";

export interface EmployeeSearchDto {
    status: EmployeeStatus
    name: string
}