import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Location } from "./entities/location.entity";
import { Pet } from "./entities/pet.entity";
import { PetsService } from "./pets.service";

@Resolver((of) => Location)
export class LocationResolver{

    constructor(private readonly pestService: PetsService) { }

    @ResolveField((of) => [Pet])
    public pets(@Parent() location: Location): Promise<Pet[]> {
        return this.pestService.forLocation(location.id);
    }
}