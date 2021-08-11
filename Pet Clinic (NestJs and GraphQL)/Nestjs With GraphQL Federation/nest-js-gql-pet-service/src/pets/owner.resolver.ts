import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Owner } from './entities/owner.entity';
import { Pet } from "./entities/pet.entity";
import { PetsService } from './pets.service';

@Resolver((of) => Owner)
export class OwnerResolver{

    constructor(private readonly petService: PetsService){}

    @ResolveField((of) => [Pet])
    pets(@Parent() owner:Owner): Promise<Pet[]>{
        return this.petService.forOwner(owner.id);
    }
} 