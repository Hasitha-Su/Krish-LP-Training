import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerDto {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field({ nullable: true })
  city: string;
}
