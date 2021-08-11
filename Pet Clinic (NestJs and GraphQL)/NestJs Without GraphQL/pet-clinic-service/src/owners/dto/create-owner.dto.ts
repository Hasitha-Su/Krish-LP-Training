import { IsNotEmpty } from "class-validator";

export class CreateOwnerDto {

    id: string

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    designation: string

}