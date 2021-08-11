import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerDto } from './dto/create-owner.input';


@Resolver(() => Owner)
export class OwnerResolver {

  constructor(private ownerService: OwnerService) {}

  @Mutation(() => Owner, {name:"createOwner"})
  create(@Args('owner') owner: CreateOwnerDto) {
    return this.ownerService.create(owner);
  }

  @Query(() => Owner, {name:"getAllOwners"})
  findAll() {
    return this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'owner' })
  findOne(@Args('id') id: string) {
    return this.ownerService.findOne(id);
  }

  // @Mutation(() => Owner)
  // removeOwner(@Args('id', { type: () => Int }) id: number) {
  //   return this.ownerService.remove(id);
  // }
}
