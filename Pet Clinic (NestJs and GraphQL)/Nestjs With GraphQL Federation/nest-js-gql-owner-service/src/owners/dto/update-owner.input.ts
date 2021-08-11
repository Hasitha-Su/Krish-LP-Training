import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput {

  @Field()
  fname: string;

  @Field()
  lname: string;

}
