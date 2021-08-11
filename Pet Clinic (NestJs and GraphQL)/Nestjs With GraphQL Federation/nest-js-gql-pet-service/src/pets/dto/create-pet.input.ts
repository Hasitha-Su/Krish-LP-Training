import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {

  @IsAlpha()
  @Field()
  name: string

  @IsAlpha()
  @Field()
  breed:string

  //remove nullable if it didnt work
  @Field({ nullable: true })
  ownerId: string

  @Field()
  locationId: string

}