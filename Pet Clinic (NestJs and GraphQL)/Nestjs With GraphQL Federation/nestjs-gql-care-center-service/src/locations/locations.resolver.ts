import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) { }

  @Mutation(() => Location)
  createLocation(@Args('createLocationInput') createLocationInput: CreateLocationInput) {
    return this.locationsService.create(createLocationInput);
  }

  @Query(() => [Location], { name: 'locations' })
  findAll() {
    return this.locationsService.findAll();
  }

  @Query(() => Location, { name: 'location' })
  findOne(@Args('id') id: string) {
    return this.locationsService.findOne(id);
  }

  @Mutation(() => Location)
  updateLocation(@Args('updateLocationInput') updateLocationInput: UpdateLocationInput) {
    return this.locationsService.update(updateLocationInput.id, updateLocationInput);
  }

  @Mutation(() => Location)
  removeLocation(@Args('id') id: string) {
    return this.locationsService.remove(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string, id: string }) {
    return this.locationsService.findOne(reference.id)
  }
}