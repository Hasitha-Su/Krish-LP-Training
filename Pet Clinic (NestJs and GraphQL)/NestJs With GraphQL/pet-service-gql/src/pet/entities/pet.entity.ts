import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Project } from 'ts-morph';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Pet {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  breed: string;

  @ManyToOne( ()=> Owner, owner => owner.pets)
  @Field( ()=> Owner)
  owner: Owner

  @Column()
  @Field()
  ownerId: string
}

