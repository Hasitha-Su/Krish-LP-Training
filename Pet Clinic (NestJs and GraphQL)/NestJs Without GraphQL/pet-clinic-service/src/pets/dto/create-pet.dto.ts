import { IsNotEmpty } from "class-validator"

export class CreatePetDto {

    id: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    breed: string
}