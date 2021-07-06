import { Module } from '@nestjs/common';
import { OwnersService } from './service/owners.service';
import { OwnersController } from './owners.controller';
import { Owner, OwnerSchema } from './schemas/Owner.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerRepository } from './repository/owner.repository';

@Module({
  imports: [MongooseModule.forFeature([ {name:Owner.name, schema: OwnerSchema}])],
  controllers: [OwnersController],
  providers: [OwnersService, OwnerRepository]
})

export class OwnersModule {}