import { IsNotEmpty } from "class-validator"

export class UpdateOwnerDto  {

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    designation: string
}
