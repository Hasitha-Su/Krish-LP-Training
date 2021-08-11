import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class UpdatePetInput{

  @Field()
  id: string
  @Field()
  name: string

  @Field()
  breed:string

}
