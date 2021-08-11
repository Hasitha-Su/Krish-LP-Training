import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Owner } from './entities/owner.entity';
import { Location } from './entities/location.entity';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) { }

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput) {
    return this.petsService.create(createPetInput);
  }

  @Query(() => [Pet], { name: 'petsFindAll' })
  findAll() {
    return this.petsService.findAll();
  }

  @Query(() => Pet, { name: 'petFindById' })
  findOne(@Args('id') id: string) {
    return this.petsService.findOne(id);
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petsService.update(updatePetInput.id, updatePetInput);
  }

  @Mutation(() => Pet)
  removePet(@Args('id') id: string) {
    return this.petsService.remove(id);
  }

  @ResolveField((of) => Owner)
  owner(@Parent() pet: Pet){
    return { __typename: 'Owner', id: pet.ownerId };
  }

  @ResolveField((of) => Location)
  location(@Parent() pet: Pet){
    return { __typename: 'Location', id: pet.locationId }
  } 
}