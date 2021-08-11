import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {

  @Field()
  fname: string;

  @Field()
  lname: string;

}