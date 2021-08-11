import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'pets', url: 'http://localhost:3002/graphql' },
          { name: 'owners', url: 'http://localhost:3003/graphql' },
          { name: 'location', url: 'http://localhost:3004/graphql' },
         
        ],
      },
    }),
  ],
})
export class AppModule {}