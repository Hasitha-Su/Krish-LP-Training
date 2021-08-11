import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Location } from './location.entity';
import { Owner } from './owner.entity';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Pet {

  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  breed: string;

  @Field()
  @Column()
  ownerId: string

  @Field(() => Owner)
  owner: Owner

  @Field()
  @Column()
  locationId:string

  @Field((type) => Location)
  location: Location

}